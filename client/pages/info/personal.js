import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  FormGroup,
  Input,
  DropDown,
  Footer,
  Header,
  ProgressHeader,
  Confirm,
} from "../../components";
import { inputEmail, inputName, saveFarmOwnerInfo } from "../../reducers/step1";
import { changePage } from "../../reducers/move";
import { emailValidator } from "../../utils";

const Personal = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.step1.data);
  const { id } = useSelector(state => state.step1);

  const [emailLocal, setEmailLocal] = useState(email.split("@")[0]);
  const [emailDomain, setEmailDomain] = useState(email.split("@")[1] || "");
  const [isOpen, setIsOpen] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = useCallback(event => {
    dispatch(inputName(event.target.value));
  }, []);

  const handleEmailLocalChange = useCallback(event => {
    setEmailLocal(event.target.value);
  }, []);

  const handleSelfInputChange = useCallback(event => {
    dispatch(inputEmail(event.target.value));
  }, []);

  const selectEmail = useCallback(
    value => {
      setIsOpen(!isOpen);
      setEmailDomain(value);
    },
    [isOpen],
  );

  useEffect(() => {
    if (emailDomain === "직접입력") {
      setEmailLocal("");
    }
  }, [emailDomain]);

  const savePersonalInfo = useCallback(() => {
    if (emailDomain === "직접입력") {
      dispatch(inputEmail(email));
      setIsValid(name && emailValidator(email));
    } else {
      dispatch(inputEmail(emailLocal + emailDomain));
      setIsValid(name && emailValidator(emailLocal + emailDomain));
    }
  }, [name, email, emailLocal, emailDomain]);

  const movePage = useCallback(() => {
    dispatch(saveFarmOwnerInfo({ name, email }, 2));
    dispatch(changePage(3, id));
  }, [name, email, id]);

  return (
    <>
      <Container>
        <Header />
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          {isValid ? (
            <h2>
              입력한 정보를 <br />
              <Confirm>확인</Confirm>해주세요
            </h2>
          ) : (
            <h2>
              간단히 농가에 대해 <br />
              알려주세요
            </h2>
          )}
          <FormGroup>
            <h3>농장주 이름</h3>
            <div>
              <Input
                size={58}
                variant="primary"
                type="text"
                placeholder="농장주 이름"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </FormGroup>
          <FormGroup type="email">
            <h3>이메일</h3>
            <div className="main-input">
              <Input
                className="input"
                size={58}
                variant="primary"
                type="text"
                placeholder="이메일"
                disabled={emailDomain === "직접입력"}
                value={emailLocal}
                onChange={handleEmailLocalChange}
              />
              <DropDown
                type="email"
                onClick={selectEmail}
                isOpen={isOpen}
                block
              />
            </div>
            {emailDomain === "직접입력" && (
              <div>
                <Input
                  size={58}
                  variant="primary"
                  type="text"
                  placeholder="이메일 입력"
                  value={email}
                  onChange={handleSelfInputChange}
                />
              </div>
            )}
          </FormGroup>
        </div>

        <div className="aside">
          <Button
            className="link"
            size={60}
            variant={isValid ? "primary" : "ghost"}
            block
            onClick={!isValid ? savePersonalInfo : movePage}
            to={isValid ? "/info/farm" : null}
          >
            다음
          </Button>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default Personal;
