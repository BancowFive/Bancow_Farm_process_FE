import styled from "styled-components";
import { flexbox, positionCenterY } from "../../../styles/utils";

export const StyledTermList = styled.ul`
  position: absolute;
  bottom: 140px;
  left: 24px;
  right: 24px;
  ${flexbox("start")};
  flex-direction: column;
  gap: 16px;

  @media (min-width: 540px) {
    top: 50%;
    left: 0;
    right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 236px;
  }
`;
