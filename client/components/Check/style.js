import styled from "styled-components";
import { textStyle } from "../../styles/utils";

export const Wrapper = styled.div`
  .title {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.tertiary};
    ${textStyle("headline4")};
  }
  .btn-wrapper {
    margin-bottom: 8px;
  }
  .error {
    color: ${({ theme }) => theme.colors.error};
    ${textStyle("body2")};
  }
`;
