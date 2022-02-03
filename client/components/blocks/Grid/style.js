import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

export const StyledContainer = styled.div`
  position: absolute;
  top: 54px;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 0 24px;
  overflow-y: auto;

  h1 {
    margin: 50px 0 20px;
    ${textStyle("headline1")};
  }

  h2 {
    margin: 34px 0;
    ${textStyle("headline3")};
  }
  div.image-wrapper {
    ${flexbox()};
  }

  span.guide {
    display: block;
    margin-bottom: 106px;
    ${textStyle("body2")};
    color: ${({ theme }) => theme.colors.guide};
  }

  span.notice {
    display: block;
    margin-bottom: 4px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.guide};
  }
`;
