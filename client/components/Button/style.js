import styled, { css } from "styled-components";

import { inlineFlexbox, textStyle } from "../../styles/utils";

const primaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.blueText};
  }
`;

const ghostButtonStyle = css`
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.disabled};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }
`;

const checkedButtonStyle = css`
  color: ${({ theme }) => theme.colors.blueText};
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 10px;
`;

const uncheckedButtonStyle = css`
  color: ${({ theme }) => theme.colors.guide};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
`;

function setButtonVariant(variant) {
  switch (variant) {
    case "primary":
      return primaryButtonStyle;
    case "ghost":
      return ghostButtonStyle;
    case "checked":
      return checkedButtonStyle;
    case "unchecked":
      return uncheckedButtonStyle;
    default:
      return primaryButtonStyle;
  }
}

const button38 = css`
  ${textStyle("body3")};
  height: 38px;
`;

const button56 = css`
  ${textStyle("body2")};
  height: 56px;
`;

const button58 = css`
  ${textStyle("body1")};
  height: 58px;
`;

const button60 = css`
  ${textStyle("headline4")};
  height: 60px;
`;

function setButtonSize(size) {
  switch (size) {
    case 38:
      return button38;
    case 56:
      return button56;
    case 58:
      return button58;
    case 60:
      return button60;
    default:
      return button60;
  }
}

export const StyledButton = styled.button`
  ${inlineFlexbox()};
  width: ${({ width }) => width};
  padding: 0 16px;
  font-weigth: 700;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) => setButtonVariant(variant)}
  ${({ size }) => setButtonSize(size)}
`;
