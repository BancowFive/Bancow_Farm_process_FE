import { Container, Button, FormGroup, Input } from "../components";
import { useCallback, useEffect, useState } from "react";

const auth = () => {
  const [telNumber, setTelNumber] = useState("");
  const [valid, setValid] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = useCallback(
    event => {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(event.target.value)) {
        setTelNumber(event.target.value);
      }
    },
    [telNumber],
  );

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
      setValid(true);
      setMessage("인증번호가 발송되었습니다.");
    } else {
      console.log("Input: error");
      setValid(false);
      setMessage("휴대폰 번호를 정확하게 입력해주세요.");
    }
  }, [telNumber, valid]);

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
              onChange={handleChange}
              icon="clear"
              onClick={resetInput}
              className={valid === null ? "" : valid ? "" : "error"}
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
            <span className={valid ? "success" : "error"}>{message}</span>
          )}
        </FormGroup>
      </Container>
      <Button variant="ghost" size={60} block to="/" disabled={valid}>
        다음
      </Button>
    </>
  );
};

export default auth;
