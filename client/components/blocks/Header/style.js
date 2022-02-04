import styled from "styled-components";
import { textStyle } from "../../../styles/utils";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  /* position: fixed; */
  /* top: 0; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoWrapper = styled.span`
  position: absolute;
  left: 0;
`;
export const CallBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.colors.tertiary};
  ${textStyle("body2")};
`;
