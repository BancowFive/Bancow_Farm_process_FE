import styled, { css } from "styled-components";
import { inlineFlexbox, textStyle } from "../../styles/utils";

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

const outlinedButtonStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
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

const certificationButtonStyle = css`
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.available};
  }
`;

function setButtonVariant(variant) {
  switch (variant) {
    case "primary":
      return primaryButtonStyle;
    case "outlined":
      return outlinedButtonStyle;
    case "ghost":
      return ghostButtonStyle;
    case "certification":
      return certificationButtonStyle;
    default:
      return primaryButtonStyle;
  }
}

const button36 = css`
  ${textStyle("body2")};
  height: 36px;
`;
const button40 = css`
  ${textStyle("body2")};
  height: 40px;
`;
const button46 = css`
  ${textStyle("body1")};
  height: 46px;
`;

const button52 = css`
  ${textStyle("body1")};
  height: 52px;
`;

function setButtonSize(size) {
  switch (size) {
    case 36:
      return button36;
    case 40:
      return button40;
    case 46:
      return button46;
    case 52:
      return button52;
    default:
      return button36;
  }
}

export const StyledButton = styled.button`
  ${inlineFlexbox()};
  padding: 0 14px;
  font-weight: 700;

  ${({ size }) => setButtonSize(size)};
  ${({ variant }) => setButtonVariant(variant)};

  ${({ to }) =>
    to &&
    css`
      a {
        ${inlineFlexbox()};
        width: 100%;
        height: inherit;
      }
    `}
`;
