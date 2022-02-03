import { Container, Button, FormGroup, Input, Modal } from "../components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { phoneNumberValidator, replacePhoneNumberRegx } from "../utils";
import { inputPhoneNumber, authorize, fetchUserData } from "../reducers/auth";

const auth = "1234";

const Auth = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(null);
  const [message, setMessage] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const [authNumber, setAuthNumber] = useState("");

  const toggleModal = useCallback(() => {
    setIsToggle(!isToggle);
  }, [isToggle]);

  const handlePhoneNumber = useCallback(
    event => {
      phoneNumberValidator(event, setPhoneNumber);
    },
    [phoneNumber],
  );

  const handleAuthNumber = useCallback(e => {
    setAuthNumber(e.target.value);
  }, []);

  useEffect(() => {
    setPhoneNumber(replacePhoneNumberRegx(phoneNumber));
  }, [phoneNumber]);

  const checkValidation = useCallback(() => {
    if (phoneNumber.length >= 12) {
      setPhoneNumberValid(true);
      setMessage("인증번호가 발송되었습니다.");
    } else {
      setPhoneNumberValid(false);
      setMessage("휴대폰 번호를 정확하게 입력해주세요.");
    }
  }, [phoneNumber, phoneNumberValid]);

  const resetInput = useCallback(() => {
    setPhoneNumber("");
  }, [phoneNumber]);

  const savePhoneNumber = useCallback(async () => {
    toggleModal();
    await dispatch(inputPhoneNumber(phoneNumber.split("-").join("")));
    dispatch(
      authorize({
        phoneNumber: phoneNumber.split("-").join(""),
        password: authNumber,
      }),
    );
  }, [phoneNumber, authNumber]);

  const fetchData = useCallback(() => {
    dispatch(fetchUserData(phoneNumber.split("-").join("")));
  }, [phoneNumber]);

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
              value={phoneNumber}
              onChange={handlePhoneNumber}
              icon="clear"
              onClick={resetInput}
              placeholder="- 없이 숫자만 입력"
              className={
                phoneNumberValid === null ? "" : phoneNumberValid ? "" : "error"
              }
            />
            <Button
              size={56}
              variant="checked"
              type="button"
              onClick={checkValidation}
              disabled={phoneNumber.length === 0}
            >
              인증 번호
            </Button>
          </div>
          {phoneNumber.length > 0 && (
            <span className={phoneNumberValid ? "success" : "error"}>
              {message}
            </span>
          )}
        </FormGroup>
        {phoneNumberValid && (
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
        onClick={savePhoneNumber}
      >
        다음
      </Button>
      <Modal
        open={isToggle}
        title="인증되었습니다."
        subMessage="확인을 누르시면 계속 진행합니다."
        icon="done"
        onClick={fetchData}
        to="/terms"
      >
        확인
      </Modal>
    </>
  );
};

export default Auth;
