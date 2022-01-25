import PropTypes from "prop-types";
import {
  ModalBackGround,
  ModalBox,
  ContentsWrapper,
  BtnWrapper,
} from "./style";
import Image from "next/image";

export const Modal = ({ open, close }) => {
  const bancowTel = "02-2274-2517";
  const callBancow = () => {
    window.location.href = `tel:${bancowTel}`;
  };
  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <div className="icon-wrapper">
            <Image
              width="50"
              height="50"
              src="/modal_phone.svg"
              alt="phone icon"
            />
          </div>
          <strong className="phone-number">{bancowTel}</strong>
          <div className="guide">전화 연결해 드릴까요?</div>
          <span className="business-hours">
            뱅카우 고객센터 문의 시간 09:00 ~ 17:00
          </span>
        </ContentsWrapper>
        <BtnWrapper>
          <button className="close-btn" onClick={close}>
            닫기
          </button>
          <button className="call-btn" onClick={callBancow}>
            연결
          </button>
        </BtnWrapper>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
