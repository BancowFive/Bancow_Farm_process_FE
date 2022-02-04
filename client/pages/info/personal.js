import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  Input,
  DropDown,
  Footer,
} from "../../components";
import { useDispatch } from "react-redux";
import { inputEmail, inputName } from "../../reducers/step1";
import { emailValidator } from "../../utils";
import { useResponsive } from "../../hooks";

const Personal = () => {
  const [width] = useResponsive();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [selfInput, setSelfInput] = useState("");
  const handleNameChange = useCallback(event => {
    setName(event.target.value);
  }, []);

  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const handleSelfInputChange = useCallback(event => {
    setSelfInput(event.target.value);
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
      setEmail("");
    }
  }, [emailDomain]);

  const isValid = useMemo(() => {
    if (emailDomain === "직접입력") {
      return emailValidator(selfInput);
    } else {
      return emailValidator(email + emailDomain);
    }
  }, [email, emailDomain, selfInput]);

  const savePersonalInfo = useCallback(() => {
    dispatch(inputName(name));
    if (emailDomain === "직접입력") {
      dispatch(inputEmail(selfInput));
    } else {
      dispatch(inputEmail(email + emailDomain));
    }
  }, [name, email, emailDomain, selfInput]);

  return (
    <>
      <Container>
        <div className="content">
          <h2>
            간단히 농가에 대해 <br />
            알려주세요
          </h2>
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
            <div>
              <Input
                className="input"
                size={58}
                variant="primary"
                type="text"
                placeholder="이메일"
                disabled={emailDomain === "직접입력"}
                value={email}
                onChange={handleEmailChange}
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
                  value={selfInput}
                  onChange={handleSelfInputChange}
                />
              </div>
            )}
          </FormGroup>
        </div>

        {width > 768 && (
          <div className="aside">
            <Button
              className="link"
              size={60}
              variant={isValid ? "primary" : "ghost"}
              disabled={!isValid}
              block
              onClick={savePersonalInfo}
              to="/info/farm"
            >
              다음
            </Button>
            <Footer />
          </div>
        )}
      </Container>
      {width <= 1024 && (
        <Button
          className="link"
          size={60}
          variant={isValid ? "primary" : "ghost"}
          disabled={!isValid}
          block
          fixed
          onClick={savePersonalInfo}
          to="/info/farm"
        >
          다음
        </Button>
      )}
    </>
  );
};

export default Personal;
