import styled, { css } from "styled-components";

import { flexbox, textStyle } from "../../../styles/utils";

const authForm = css`
  .input {
    flex: 7;
    min-width: 210px;
  }
  button {
    flex: 3;
    min-width: 90px;
    padding: 0 12px;
  }
`;
const addressForm = css`
  .input {
    min-width: 185px;
  }
  button {
    min-width: 115px;
  }
`;

const emailForm = css`
  .input {
    flex: 7;
    min-width: 174px;
  }

  div {
    flex: 3;
    min-width: 126px;
    padding: 0;

    button {
      padding: 0 18px 0 10px;
    }
  }
`;

function setFormType(type) {
  switch (type) {
    case "fodder":
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
  width: ${({ width }) => width};
  margin-bottom: 24px;

  h3 {
    width: 100%;
    margin-bottom: 10px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    ${flexbox("start", "center")};
    gap: 12px;

    input {
      &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
      }
    }

    &.main-input {
      margin-bottom: 8px;
    }

    ${({ type }) => setFormType(type)};
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
`;
