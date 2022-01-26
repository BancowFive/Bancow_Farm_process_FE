import styled, { css } from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

export const StyledButtonGroup = styled.div`
  ${({ link }) =>
    link &&
    css`
      position: fixed;
      bottom: 0;
    `}
  ${flexbox("start")};

  button:first-child {
    flex: 4;
  }

  button:nth-child(2) {
    flex: 7;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
  }

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;

export const StyledRadioGroup = styled.div`
  h3 {
    width: 100%;
    margin-bottom: 10px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    ${flexbox("start")};
    gap: 16px;
  }

  label:first-child {
    flex: 1;
  }

  label:nth-child(2) {
    flex: 1;
  }

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;
