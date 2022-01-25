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
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 190px;
  /* width: 86%;
  height: 35%; */
  width: 312px;
  height: 280px;
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
    margin: 20px 0 4px;
  }
  .guide {
    color: ${({ theme }) => theme.colors.secondary};
    ${textStyle("headline4")};
    margin-bottom: 20px;
  }
  .business-hours {
    display: inline-block;
    color: ${({ theme }) => theme.colors.guide};
    ${textStyle("body3")};
    margin-bottom: 31px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 110px;
  height: 54px;
  left: 0px;
  bottom: 0px;
  background: #ebebeb;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const CallBtn = styled.button`
  position: absolute;
  width: 202px;
  height: 54px;
  left: 110px;
  bottom: 0px;
  background: #3478f5;
  color: ${({ theme }) => theme.colors.white};
`;
