import styled from "styled-components";
import { flexbox } from "../../../styles/utils";

export const StyledTermList = styled.ul`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 140px;
  ${flexbox("start")};
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 134px;
  }
`;
