import styled, { css } from "styled-components";

import { flexbox, textStyle } from "../../../styles/utils";

const authForm = css`
  input {
    min-width: 210px;
  }
  button {
    min-width: 90px;
    padding: 0 12px;
  }
`;
const addressForm = css`
  input:first-child {
    min-width: 185px;
  }
  button {
    min-width: 115px;
  }
`;

const emailForm = css`
  input:first-child {
    min-width: 174px;
  }
  div {
    min-width: 126px;
    padding: 0;

    button {
      padding: 0 18px 0 10px;
    }
  }
`;

function setFormType(type) {
  switch (type) {
    case "auth":
      return authForm;
    case "address":
      return addressForm;
    case "email":
      return emailForm;
    default:
      return null;
  }
}

export const StyledFormGroup = styled.div`
  margin-bottom: 24px;

  h3 {
    width: 100%;
    margin-bottom: 10px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    ${flexbox("start", "start")};
    gap: 12px;
    margin-bottom: 8px;

    input {
      flex: 1;
      &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
      }
    }
  }

  span {
    margin-top: 8px;
    &.error {
      color: ${({ theme }) => theme.colors.error};
      ${textStyle("body2")};
    }

    &.success {
      color: ${({ theme }) => theme.colors.valid};
      ${textStyle("body2")};
    }
  }
  ${({ type }) => setFormType(type)};

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;
