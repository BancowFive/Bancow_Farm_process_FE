import { Container, Button, FormGroup, Input, Modal } from "../components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { telNumberValidator, replaceTelNumberRegx } from "../utils";
import { inputTelNumber } from "../reducers/auth";

const auth = "1234";

const Auth = () => {
  const dispatch = useDispatch();
  const [telNumber, setTelNumber] = useState("");
  const [telNumberValid, setTelNumberValid] = useState(null);
  const [message, setMessage] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const [authNumber, setAuthNumber] = useState("");

  const toggleModal = useCallback(() => {
    setIsToggle(!isToggle);
  }, [isToggle]);

  const handleTelNumber = useCallback(
    event => {
      telNumberValidator(event, setTelNumber);
    },
    [telNumber],
  );

  const handleAuthNumber = useCallback(e => {
    setAuthNumber(e.target.value);
  }, []);

  useEffect(() => {
    setTelNumber(replaceTelNumberRegx(telNumber));
  }, [telNumber]);

  const checkValidation = useCallback(() => {
    if (telNumber.length >= 12) {
      setTelNumberValid(true);
      setMessage("인증번호가 발송되었습니다.");
    } else {
      setTelNumberValid(false);
      setMessage("휴대폰 번호를 정확하게 입력해주세요.");
    }
  }, [telNumber, telNumberValid]);

  const resetInput = useCallback(() => {
    setTelNumber("");
  }, [telNumber]);

  const saveTelNumber = useCallback(() => {
    toggleModal();
    dispatch(inputTelNumber(telNumber));
  }, [telNumber]);

  return (
    <>
      <Container>
        <h2>
          휴대폰 본인 인증이 <br />
          필요해요
        </h2>
        <FormGroup type="auth">
          <h3>휴대폰 번호</h3>
          <div>
            <Input
              size={58}
              variant="primary"
              type="text"
              value={telNumber}
              onChange={handleTelNumber}
              icon="clear"
              onClick={resetInput}
              placeholder="- 없이 숫자만 입력"
              className={
                telNumberValid === null ? "" : telNumberValid ? "" : "error"
              }
            />
            <Button
              size={56}
              variant="checked"
              type="button"
              onClick={checkValidation}
              disabled={telNumber.length === 0}
            >
              인증 번호
            </Button>
          </div>
          {telNumber.length > 0 && (
            <span className={telNumberValid ? "success" : "error"}>
              {message}
            </span>
          )}
        </FormGroup>
        {telNumberValid && (
          <FormGroup>
            <h3>인증번호</h3>
            <div>
              <Input
                size={58}
                variant="primary"
                type="text"
                value={authNumber}
                onChange={handleAuthNumber}
                placeholder="인증번호 입력"
                maxLength={4}
              />
            </div>
          </FormGroup>
        )}
      </Container>
      <Button
        variant={authNumber === auth ? "primary" : "ghost"}
        size={60}
        block
        disabled={!(authNumber === auth)}
        fixed
        onClick={toggleModal}
      >
        다음
      </Button>
      <Modal
        open={isToggle}
        title="인증되었습니다."
        subMessage="확인을 누르시면 계속 진행합니다."
        icon="done"
        to="/terms"
        onClick={saveTelNumber}
      >
        확인
      </Modal>
    </>
  );
};

export default Auth;
