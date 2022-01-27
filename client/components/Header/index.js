import Image from "next/image";
import { useState } from "react";
import { Wrapper, LogoWrapper, CallBtn } from "./style";
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
      <Wrapper>
        <LogoWrapper>
          <Image src="/bancow_logo.svg" alt="logo" width="68" height="13" />
        </LogoWrapper>
        <CallBtn onClick={openModal}>전화문의</CallBtn>
      </Wrapper>
      <Modal open={modalOpen} close={closeModal} />
    </>
  );
};

export default Header;
