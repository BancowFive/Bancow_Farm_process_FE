import styled from "styled-components";
import { flexbox } from "../../../styles/utils";

export const StyledTermList = styled.ul`
  position: absolute;
  bottom: 140px;
  ${flexbox("start")};
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 166px;
  }
`;
