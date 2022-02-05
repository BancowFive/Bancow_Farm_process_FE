import styled from "styled-components";
import { textStyle } from "../../styles/utils";

export const Wrapper = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.tertiary};
    ${textStyle("headline4")};
  }
  .notice {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.guide};
    ${textStyle("body2")};
  }
  .btn-wrapper {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .invisible {
    display: none;
  }
  .error {
    color: ${({ theme }) => theme.colors.error};
    ${textStyle("body2")};
  }
`;
