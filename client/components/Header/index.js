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
    <Container>
      <LogoWrapper>
        <Image src="/bancow_logo.png" alt="logo" width="68" height="18" />
      </LogoWrapper>
      <CallBtn onClick={openModal}>전화문의</CallBtn>
      <Modal open={modalOpen} close={closeModal} title="Modal heading" />
    </Container>
  );
};

export default Header;
