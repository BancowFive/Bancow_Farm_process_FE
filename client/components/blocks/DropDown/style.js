import styled, { css } from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

const email = css`
  ${textStyle("body2")};
`;

const fodder = css`
  ${textStyle("body1")};
`;

function setDropDownType(type) {
  switch (type) {
    case "email":
      return email;
    case "fodder":
      return fodder;
    default:
      return null;
  }
}

export const StyledDropDown = styled.div`
  position: relative;
  ${flexbox("start")};
  flex-direction: column;
  width: ${({ block }) => css`100%`};

  button {
    ${({ type }) => setDropDownType(type)}
  }
`;
