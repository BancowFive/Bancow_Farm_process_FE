import Image from "next/image";
import { useState } from "react";
import { Container, LogoWrapper, CallBtn } from "./style";
import { Modal } from "../Modal";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container>
        <LogoWrapper>
          <Image src="/bancow_logo.svg" alt="logo" width="68" height="13" />
        </LogoWrapper>
        <CallBtn onClick={openModal}>전화문의</CallBtn>
      </Container>
      <Modal
        open={modalOpen}
        close={closeModal}
        title="02-2274-2517"
        guide="전화 연결해 드릴까요?"
        subMessage="뱅카우 고객센터 문의 시간 09:00 ~ 17:00"
        icon="tel"
        to="tel:02-2274-2517"
      />
    </>
  );
};

export default Header;
