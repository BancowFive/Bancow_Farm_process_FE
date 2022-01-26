import PropTypes from "prop-types";
import { ModalBackGround, ModalBox, ContentsWrapper } from "./style";
import Image from "next/image";
import { ButtonGroup, Button } from "../..";

function getModalIcon(icon) {
  switch (icon) {
    case "tel":
      return (
        <Image width="50" height="50" src="/modal_phone.svg" alt="phone icon" />
      );
    case "done":
      return (
        <Image
          width="50"
          height="50"
          src="/done.svg"
          alt="authorization process done icon"
        />
      );
    default:
      return null;
  }
}

export const Modal = ({ open, close, title, guide, subMessage, icon, to }) => {
  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <div className="icon-wrapper">{icon && getModalIcon(icon)}</div>
          {title && <strong className="title">{title}</strong>}
          {guide && <div className="guide">{guide}</div>}
          {subMessage && <span className="sub-message">{subMessage}</span>}
        </ContentsWrapper>
        <ButtonGroup className="modal__button-group" link>
          <Button size={54} variant="ghost" onClick={close}>
            닫기
          </Button>
          <Button size={54} variant="primary" to={to}>
            연결
          </Button>
        </ButtonGroup>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
  guide: PropTypes.string,
  subMessage: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
};
