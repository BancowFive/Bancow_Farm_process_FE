import styled, { css } from "styled-components";
import { inlineFlexbox, textStyle } from "../../../styles/utils";

const primaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

const ghostButtonStyle = css`
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.disabled};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const checkedButtonStyle = css`
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.available};
  }
`;

const uncheckedButtonStyle = css`
  color: ${({ theme }) => theme.colors.guide};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }
`;

const uploadedButtonStyle = css`
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  border-radius: 8px;
  padding: 0 0;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }
`;

const unuploadedButtonStyle = css`
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 8px;
  padding: 0 0;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.available};
  }
`;

const selectInput = css`
  color: ${({ theme }) => theme.colors.guide};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }
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
    case "select":
      return selectInput;
    case "unuploaded":
      return unuploadedButtonStyle;
    case "uploaded":
      return uploadedButtonStyle;
    default:
      return primaryButtonStyle;
  }
}

const button38 = css`
  ${textStyle("body3")};
  height: 38px;
`;

const button54 = css`
  ${textStyle("body1")};
  height: 54px;
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
    case 54:
      return button54;
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
  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      bottom: 0;

      a {
        ${inlineFlexbox()};
        width: 100%;
        height: inherit;
      }
    `}

  ${({ size }) => setButtonSize(size)}
  ${({ block }) => block && `width: 100%;`}
  padding: 0 18px;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) => {
    if (
      variant === "unchecked" ||
      variant === "checked" ||
      variant === "unuploaded" ||
      variant === "uploaded"
    ) {
      return css`
        ${inlineFlexbox("between")};
        ${textStyle("body1")};
        padding: 0 14px 0 16px;

        ${({ type }) =>
          type &&
          css`
            ${inlineFlexbox()};
            font-weight: 700;
          `}

        div {
          position: relative;
          width: 24px;
          height: 24px;
          border: 1px solid ${({ theme }) => theme.colors.placeholder};
          border-radius: 50%;

          &.is-active {
            border: none;
          }
        }

        ${setButtonVariant(variant)}
      `;
    }

    if (variant === "primary") {
      return css`
        ${inlineFlexbox()};
        font-weight: 700;
        ${setButtonVariant(variant)}
      `;
    }
    return css`
      ${inlineFlexbox()};
      ${setButtonVariant(variant)}
    `;
  }}

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;
