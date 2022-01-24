import {
  IconWrapper,
  ModalBackGround,
  ModalBox,
  ContentsWrapper,
  PhoneNumber,
  Guide,
  BusinessHours,
  CloseBtn,
  CallBtn,
} from "./style";
import Image from "next/image";

export const Modal = ({ open, close }) => {
  const bancowTel = "02-2274-2517";
  const callBancow = () => {
    location.href = `tel:${bancowTel}`;
  };
  return open ? (
    <ModalBackGround>
      <ModalBox>
        <ContentsWrapper>
          <IconWrapper>
            <Image
              width="50"
              height="50"
              src="/modal_phone.svg"
              alt="phone icon"
            />
          </IconWrapper>
          <PhoneNumber>{bancowTel}</PhoneNumber>
          <Guide>전화 연결해 드릴까요?</Guide>
          <BusinessHours>뱅카우 고객센터 문의 시간 09:00 ~ 17:00</BusinessHours>
        </ContentsWrapper>
        <CloseBtn onClick={close}>닫기</CloseBtn>
        <CallBtn onClick={callBancow}>연결</CallBtn>
      </ModalBox>
    </ModalBackGround>
  ) : null;
};
