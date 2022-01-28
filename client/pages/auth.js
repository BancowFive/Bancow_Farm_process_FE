import { Container, Button, FormGroup, Input, Modal } from "../components";
import { useCallback, useEffect, useState } from "react";

const auth = "1234";

const Auth = () => {
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
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(event.target.value)) {
        setTelNumber(event.target.value);
      }
    },
    [telNumber],
  );

  const handleAuthNumber = useCallback(e => {
    setAuthNumber(e.target.value);
  }, []);

  useEffect(() => {
    if (telNumber.length === 10 || telNumber.length === 12) {
      setTelNumber(
        telNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
      );
    }
    if (telNumber.length === 13) {
      setTelNumber(
        telNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      );
    }
  }, [telNumber]);

  const checkValidation = useCallback(() => {
    if (telNumber.length >= 12) {
      console.log("Input: valid");
      setTelNumberValid(true);
      setMessage("인증번호가 발송되었습니다.");
    } else {
      console.log("Input: error");
      setTelNumberValid(false);
      setMessage("휴대폰 번호를 정확하게 입력해주세요.");
    }
  }, [telNumber, telNumberValid]);

  const resetInput = useCallback(() => {
    setTelNumber("");
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
        close={toggleModal}
        title="인증되었습니다."
        subMessage="확인을 누르시면 계속 진행합니다."
        icon="done"
        to="/terms"
      />
    </>
  );
};

export default Auth;
