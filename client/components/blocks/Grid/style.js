import styled from "styled-components";
import { textStyle } from "../../../styles/utils";

export const StyledContainer = styled.div`
  padding: 0 24px;

  h1 {
    margin: 50px 0 20px;
    ${textStyle("headline1")};
  }

  h2 {
    margin: 34px 0;
    ${textStyle("headline3")};
  }

  span {
    margin-bottom: 106px;
    ${textStyle("body2")};
    color: ${({ theme }) => theme.colors.guide};
  }
`;
