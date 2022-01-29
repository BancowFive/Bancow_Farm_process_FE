import styled, { css } from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

const email = css`
  ${textStyle("body2")};
`;

function setDropDownType(type) {
  switch (type) {
    case "email":
      return email;
    default:
      return null;
  }
}

export const StyledDropDown = styled.div`
  position: relative;
  ${flexbox("start")};
  flex-direction: column;

  button {
    ${({ type }) => setDropDownType(type)}
  }
`;
