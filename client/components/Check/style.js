import styled from "styled-components";
import { textStyle } from "../../styles/utils";

export const Wrapper = styled.div`
  .title {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.tertiary};
    ${textStyle("headline")};
  }
`;
