import styled, { keyframes } from "styled-components";
import { textStyle } from "../../styles/utils/";

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
  z-index: 99;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 190px;
  width: 86%;
  height: 35%;
  min-height: 280px;
  /* width: 312px;
  height: 280px; */
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  animation: ${ModalFade} 0.5s;
  overflow: hidden;
  text-align: center;
`;

export const ContentsWrapper = styled.div`
  .icon-wrapper {
    margin-top: 30px;
  }
  .phone-number {
    display: inline-block;
    color: ${({ theme }) => theme.colors.black};
    ${textStyle("headline3")};
    font-weight: 700;
    margin-top: 20px;
  }
  .guide {
    color: ${({ theme }) => theme.colors.secondary};
    ${textStyle("headline4")};
    margin-top: 4px;
  }
  .business-hours {
    display: inline-block;
    color: ${({ theme }) => theme.colors.guide};
    ${textStyle("body3")};
    margin-top: 20px;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 30px;
  width: 100%;
  min-width: 312px;
  height: 54px;

  .close-btn {
    width: 35%;
    height: 100%;
    background: #ebebeb;
    text-align: center;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  .call-btn {
    width: 65%;
    height: 100%;
    background: #3478f5;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
`;
