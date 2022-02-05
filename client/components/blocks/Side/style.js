import styled from "styled-components";
import { flexbox } from "../../../styles/utils";

export const StyledSide = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${flexbox()}
    width: 20%;
    height: 100vh;
    background: linear-gradient(180deg, #004bfa 0%, #3478f5 49.96%);
  }
`;
