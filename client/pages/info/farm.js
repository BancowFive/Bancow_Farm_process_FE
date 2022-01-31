import { useCallback, useState, useRef, useEffect } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
  DropDown,
} from "../../components";
import { setDaumPost, openDaumPost } from "../../utils";
import { useDispatch } from "react-redux";
import { inputFarmName, inputFarmAddress } from "../../reducers/step1";

const Farm = () => {
  const dispatch = useDispatch();

  const postcodeRef = useRef(null);

  const [isOpen, setIsOpen] = useState(true);
  const [farmName, setFarmName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [fodder, setFodder] = useState("");
  const selectFodder = useCallback(
    value => {
      setIsOpen(!isOpen);
      setFodder(value);
    },
    [isOpen],
  );

  const farmNameChange = useCallback(event => {
    setFarmName(event.target.value);
  }, []);

  const loadPostLayout = useCallback(() => {
    openDaumPost(setPostCode, setAddress);
  }, []);

  useEffect(() => {
    setDaumPost();
  }, []);

  const saveFarmInfo = useCallback(() => {
    dispatch(inputFarmName(farmName));
    dispatch(inputFarmAddress({ address, postCode }));
  }, [farmName, postCode, address]);

  return (
    <>
      <Container>
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
          <div>
            <Input
              size={58}
              variant="primary"
              type="text"
              placeholder="우편번호"
              value={postCode}
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
              value={address}
              block
              readOnly
            />
          </div>
        </FormGroup>
        <FormGroup>
          <h3>사료</h3>
          <div>
            <DropDown
              type="fodder"
              onClick={selectFodder}
              isOpen={isOpen}
              block
            />
          </div>
        </FormGroup>
      </Container>
      <ButtonGroup fixed>
        <Button variant="ghost" size={60} to="/info/personal">
          이전
        </Button>
        <Button
          variant={
            farmName && postCode && address && fodder ? "primary" : "ghost"
          }
          disabled={!(farmName && postCode && address && fodder)}
          size={60}
          onClick={saveFarmInfo}
          to="/"
        >
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Farm;
