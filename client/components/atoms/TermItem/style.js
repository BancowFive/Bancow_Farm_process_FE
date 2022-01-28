import styled, { css } from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

export const StyledTermItem = styled.li`
  position: relative;
  ${flexbox("start")};
  width: 100%;
  height: 34px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;

  span {
    margin-top: 1px !important;
  }

  &.select-all {
    height: 50px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    ${textStyle("headline4")};
  }

  strong {
    &.is-required {
      ${textStyle("body1")};
      color: ${({ theme }) => theme.colors.valid};
    }
  }

  ${({ detailIcon }) =>
    detailIcon &&
    css`
      span:last-child {
        position: absolute !important;
        right: 0;
      }
    `}
`;
