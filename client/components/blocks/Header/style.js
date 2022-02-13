import styled from "styled-components";
import { textStyle } from "../../../styles/utils";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-end;
    height: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoWrapper = styled.span`
  position: absolute;
  left: 24px;

  @media (min-width: 540px) {
    left: 0;
  }
`;

export const CallBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 24px;
  color: ${({ theme }) => theme.colors.tertiary};
  ${textStyle("body2")};

  @media (min-width: 540px) {
    ${textStyle("headline4")};
    right: 0;
  }
`;
