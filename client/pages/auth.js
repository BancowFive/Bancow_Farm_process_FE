import {
  Container,
  Button,
  FormGroup,
  Input,
  Modal,
  Footer,
  ToastBar,
  ProgressHeader,
} from "../components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks";
import {
  phoneNumberValidator,
  replacePhoneNumberRegx,
  printPhoneNumber,
  movePage,
} from "../utils";
import {
  inputPhoneNumber,
  authorize,
  checkUserInProgress,
  getCertification,
} from "../reducers/auth";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    password,
    certificationError,
    authorizationDone,
    authorizationError,
    checkUserInProgressDone,
    pageNum,
    id,
  } = useSelector(state => state.auth);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(null);
  const [message, setMessage] = useState("");
  const [authNumber, handleAuthNumber] = useInput("");

  const [isToggle, setIsToggle] = useState(false);
  const [isError, setIsError] = useState(false);

  const toggleModal = useCallback(() => {
    setIsToggle(!isToggle);
  }, [isToggle]);

  const handlePhoneNumber = useCallback(event => {
    const phoneNumber = phoneNumberValidator(event);
    setPhoneNumber(phoneNumber);
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
    dispatch(getCertification({ phoneNumber: printPhoneNumber(phoneNumber) }));
  }, [phoneNumber, phoneNumberValid]);

  const resetInput = useCallback(() => {
    setPhoneNumber("");
  }, [phoneNumber]);

  const savePhoneNumber = useCallback(async () => {
    dispatch(inputPhoneNumber(printPhoneNumber(phoneNumber)));
    dispatch(
      authorize({
        phoneNumber: printPhoneNumber(phoneNumber),
        password: authNumber,
      }),
    );
  }, [phoneNumber, authNumber]);

  useEffect(() => {
    if (certificationError) {
      setIsError(true);
      return;
    }
    if (authorizationDone && phoneNumber) {
      toggleModal();
      return;
    } else if (authorizationError && phoneNumber) {
      setIsError(true);
      return;
    }
  }, [certificationError, authorizationDone, authorizationError, phoneNumber]);

  const fetchData = useCallback(() => {
    dispatch(checkUserInProgress(printPhoneNumber(phoneNumber)));
  }, [phoneNumber]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (checkUserInProgressDone && token) {
      movePage(pageNum, router);
    }
  }, [checkUserInProgressDone, pageNum, id]);
  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h2>
            휴대폰 본인 인증이 <br />
            필요해요
          </h2>
          <FormGroup type="auth">
            <h3>휴대폰 번호</h3>
            <div className="main-input">
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
                  phoneNumberValid === null
                    ? "input"
                    : phoneNumberValid
                    ? "input"
                    : "error input"
                }
                maxLength={13}
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
          {isError && (
            <div className="toast">
              <ToastBar show width={"196.5px"}>
                {certificationError
                  ? "서버가 불안정합니다. 인증번호 요청을 다시하세요."
                  : authorizationError
                  ? "서버가 불안정합니다. 본인인증에 실패하였습니다."
                  : setIsError(false)}
              </ToastBar>
            </div>
          )}
        </div>
        <div className="aside">
          <Button
            className="link"
            variant={password && authNumber === password ? "primary" : "ghost"}
            size={60}
            block
            disabled={!(authNumber === password)}
            onClick={savePhoneNumber}
          >
            다음
          </Button>
          <Footer />
        </div>
      </Container>

      <Modal
        open={isToggle}
        title="인증되었습니다."
        subMessage="확인을 누르시면 계속 진행합니다."
        icon="done"
        onClick={fetchData}
      >
        확인
      </Modal>
    </>
  );
};

export default Auth;
