import PropTypes from "prop-types";
import { ModalBackGround, ModalBox, ContentsWrapper } from "./style";
import Image from "next/image";
import { ButtonGroup, Button } from "../..";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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

export const Modal = ({
  open,
  close,
  title,
  guide,
  subMessage,
  icon,
  to,
  onClick,
  children,
}) => {
  const { fetchUserDataDone } = useSelector(state => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (to === null) {
      router.replace("/auth");
    }
  }, []);

  useEffect(() => {
    if (fetchUserDataDone) {
      router.replace("/terms");
    }
  }, [fetchUserDataDone]);

  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <div className="icon-wrapper">{icon && getModalIcon(icon)}</div>
          {title && <strong className="title">{title}</strong>}
          {guide && <div className="guide">{guide}</div>}
          {subMessage && <span className="sub-message">{subMessage}</span>}
        </ContentsWrapper>
        <ButtonGroup className="modal__button-group" fixed>
          {close && (
            <Button size={54} variant="ghost" onClick={close}>
              닫기
            </Button>
          )}
          <Button size={54} variant="primary" to={to} onClick={onClick}>
            {children}
          </Button>
        </ButtonGroup>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func,
  title: PropTypes.string,
  guide: PropTypes.string,
  subMessage: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
