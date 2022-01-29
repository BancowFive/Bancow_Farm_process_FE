import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  Input,
  DropDown,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { inputEmail, inputUsername } from "../../reducers/step1";

const Personal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selfInput, setSelfInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [emailDomain, setEmailDomain] = useState("");
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

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSelfInputChange = event => {
    setSelfInput(event.target.value);
  };

  const isEmail = email => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };

  const vaild = useMemo(() => {
    if (emailDomain === "직접입력") {
      return isEmail(selfInput);
    } else {
      return isEmail(email + emailDomain);
    }
  }, [email, emailDomain, selfInput]);

  const onClick = () => {
    dispatch(inputUsername(name));
    if (emailDomain === "직접입력") {
      dispatch(inputEmail(selfInput));
    } else {
      dispatch(inputEmail(email + emailDomain));
    }
  };

  return (
    <>
      <Container>
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
      </Container>
      <Button
        size={60}
        variant={vaild ? "primary" : "ghost"}
        disabled={!vaild}
        block
        fixed
        onClick={onClick}
        to="/info/farm"
      >
        다음
      </Button>
    </>
  );
};

export default Personal;
