import styled, { css } from "styled-components";

import { flexbox } from "../../styles/utils";

const authForm = css`
  button {
    width: 90px;
    padding: 0 12px;
  }
`;
const addressForm = css`
  button {
    width: 115px;
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
  ${flexbox("start")};

  padding: 24px;

  input {
    flex: 7;
    max-width: 210px;
    margin-right: 12px;
  }

  ${({ type }) => setFormType(type)}
`;
