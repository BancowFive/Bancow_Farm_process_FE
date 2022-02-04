import styled from "styled-components";
import { textStyle } from "../../../styles/utils";

export const StyledContainer = styled.div`
  width: 100%;
  height: 66px;

  span {
    ${textStyle("headline4")};
    color: ${({ theme }) => theme.colors.primary};
  }

  .progressBar {
    margin-top: 14px;
  }
`;
