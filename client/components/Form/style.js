import styled, { css } from "styled-components";
import { textStyle } from "../../styles/utils/typography";
import { positionCenterY } from "../../styles/utils";
import { flexbox } from "../../styles/utils";

const input58 = css`
  height: 58px;
`;

const input70 = css`
  height: 70px;
`;

function setInputSize(size) {
  switch (size) {
    case 58:
      return input58;
    case 70:
      return input70;
    default:
      return input70;
  }
}

const primaryInput = css`
  backgorund-color: ${({ theme }) => theme.colors.backgroundGray};
`;

const ghostInput = css`
  backgorund-color: ${({ theme }) => theme.colors.disabled};
`;

const selectInput = css`
  backgorund-color: ${({ theme }) => theme.colors.white};
`;

function setInputVariant(variant) {
  switch (variant) {
    case "primary":
      return primaryInput;
    case "ghost":
      return ghostInput;
    case "select":
      return selectInput;
    default:
      return primaryInput;
  }
}

export const StyledInput = styled.input`
  ${textStyle("body1")};
  display: block;
  width: 100%;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  appearance: none;

  &:placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ size }) => setInputSize(size)};
  ${({ variant }) => setInputVariant(variant)}
`;

export const StyledInputGroup = styled.div`
  position: relative;

  input {
    padding-right: 40px;
  }

  .icon {
    ${positionCenterY()};
    ${flexbox()};
    right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const StyledSelectGroup = styled.div`
  position: relative;

  button {
    justify-content: flex-start;
    padding-right: 40px;
    border-radius: 10px;
    ${textStyle("body1")}
    color: ${({ theme }) => theme.colors.tertiary}
  }

  .icon {
    ${positionCenterY()};
    ${flexbox()};
    right: 20px;
    width: 26px;
    height: 26px;
    transform: rotate(90deg) translate(-50%, -50%);
    transition: transform 200ms ease-in-out;

    &.is-open {
      transform: translate(50%, -50%) rotate(-90deg);
    }
  }
`;
