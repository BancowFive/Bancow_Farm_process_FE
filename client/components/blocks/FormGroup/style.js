import styled, { css } from "styled-components";

import { flexbox, textStyle } from "../../../styles/utils";

const authForm = css`
  button {
    min-width: 90px;
    padding: 0 12px;
  }
`;
const addressForm = css`
  button {
    min-width: 115px;
    padding: 0 18px;
  }
`;

function setFormType(type) {
  switch (type) {
    case "auth":
      return authForm;
    case "address":
      return addressForm;
    default:
      return authForm;
  }
}

export const StyledFormGroup = styled.div`
  h3 {
    width: 100%;
    margin-bottom: 10px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    ${flexbox("start")};
    gap: 12px;
  }

  input:first-child {
    flex: 7;
    min-width: 210px;

    &.error {
      border: 1px solid ${({ theme }) => theme.colors.error};
    }
  }

  span.error {
    color: ${({ theme }) => theme.colors.error};
    ${textStyle("body2")};
  }

  span.success {
    color: ${({ theme }) => theme.colors.valid};
    ${textStyle("body2")};
  }

  ${({ type }) => setFormType(type)}

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;
