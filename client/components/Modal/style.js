import styled, { keyframes } from "styled-components";

export const ModalFade = keyframes`
  from {
      opacity: 0;
      margin-top: -50px;
  }
  to {
      opacity: 1;
      margin-top: 0;
  }
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 190px;
  /* width: 86%;
  height: 35%; */
  width: 312px;
  height: 280px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: ${ModalFade} 0.5s;
  overflow: hidden;
  text-align: center;
`;

export const ContentsWrapper = styled.div`
  border: 2px solid green;
`;

export const IconWrapper = styled.div`
  margin-top: 30px;
`;

export const PhoneNumber = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.headline3};
  letter-spacing: ${({ theme }) => theme.letterSpacings.headline3};
  line-height: ${({ theme }) => theme.lineHeights.headline3};
  font-weight: 700;
  margin: 20px 0 4px;
`;

export const Guide = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.headline4};
  letter-spacing: ${({ theme }) => theme.letterSpacings.headline4};
  line-height: ${({ theme }) => theme.lineHeights.headline4};
  margin-bottom: 20px;
`;

export const BusinessHours = styled.div`
  color: ${({ theme }) => theme.colors.guide};
  font-size: 12px;
  line-height: ${({ theme }) => theme.lineHeights.etc};
  margin-bottom: 31px;
`;

export const CloseBtn = styled.button`
  border: 1px solid red;
  width: 100px;
`;

export const CallBtn = styled.button`
  border: 1px solid blue;
  width: 200px;
`;
