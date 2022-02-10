import { useCallback, useState, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
  DropDown,
  Footer,
  ProgressHeader,
} from "../../../components";
import {
  inputFarmName,
  inputFarmFodder,
  saveFarmInfo,
} from "../../../reducers/step1";
import { changePage } from "../../../reducers/move";
import { setDaumPost, openDaumPost } from "../../../utils";

const Farm = () => {
  const dispatch = useDispatch();
  const { farmName, farmPostCode, farmAddress, fodder } = useSelector(
    state => state.step1.data,
  );
  const { id } = useSelector(state => state.auth);

  const postcodeRef = useRef(null);
  const [selfInput, setSelfInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const farmNameChange = useCallback(event => {
    dispatch(inputFarmName(event.target.value));
  }, []);

  const loadPostLayout = useCallback(() => {
    openDaumPost(dispatch);
  }, []);

  useEffect(() => {
    setDaumPost();
  }, []);

  useEffect(() => {
    if (fodder === "직접입력") {
      setSelfInput("");
    }
  }, [fodder]);

  const selectFodder = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleFodderChange = useCallback(event => {
    setSelfInput(event.target.value);
  }, []);

  const isValid = useMemo(() => {
    if (fodder === "직접입력") {
      return farmName && farmPostCode && farmAddress && selfInput;
    } else {
      return farmName && farmPostCode && farmAddress && fodder;
    }
  }, [farmName, farmPostCode, farmAddress, fodder, selfInput]);

  const saveFarm = useCallback(() => {
    if (fodder === "직접입력") {
      dispatch(inputFarmFodder(selfInput));
    }
  }, [selfInput]);

  const movePage = useCallback(() => {
    saveFarm();
    dispatch(
      saveFarmInfo({
        data: { farmName, farmAddress, farmPostCode, fodder },
        id,
        pageNum: 3,
      }),
    );
    dispatch(changePage({ PageNum: 4, id }));
  }, [farmName, farmAddress, farmPostCode, fodder, id]);

  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h2>
            간단히 농가에 대해 <br />
            알려주세요
          </h2>
          <FormGroup>
            <h3>농가명</h3>
            <div>
              <Input
                size={58}
                variant="primary"
                type="text"
                placeholder="농가명 입력"
                value={farmName}
                onChange={farmNameChange}
              />
            </div>
          </FormGroup>
          <FormGroup type="address">
            <h3>농가주소</h3>
            <div className="main-input">
              <Input
                size={58}
                variant="primary"
                type="text"
                placeholder="우편번호"
                value={farmPostCode}
                readOnly
              />
              <Button
                variant="checked"
                size={56}
                type="button"
                onClick={loadPostLayout}
              >
                우편번호 검색
              </Button>
            </div>
            <div ref={postcodeRef}></div>
            <div>
              <Input
                size={58}
                variant="primary"
                type="text"
                placeholder="상세주소 입력"
                value={farmAddress}
                block
                readOnly
              />
            </div>
          </FormGroup>
          <FormGroup type="fodder">
            <h3>사료</h3>
            <div className="main-input">
              <DropDown
                type="fodder"
                onClick={selectFodder}
                isOpen={isOpen}
                block
              />
            </div>
            {fodder === "직접입력" && (
              <div>
                <Input
                  size={58}
                  variant="primary"
                  type="text"
                  placeholder="사료 입력"
                  value={selfInput}
                  onChange={handleFodderChange}
                />
              </div>
            )}
          </FormGroup>
        </div>

        <div className="aside">
          <ButtonGroup className="link">
            <Button
              className="link"
              variant="ghost"
              size={60}
              to={`/info/personal/${id}`}
            >
              이전
            </Button>
            <Button
              className="link"
              variant={isValid ? "primary" : "ghost"}
              disabled={!isValid}
              size={60}
              onClick={movePage}
              to={`/info/check/farm/${id}`}
            >
              다음
            </Button>
          </ButtonGroup>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default Farm;
