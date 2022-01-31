import styled, { css } from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

const email = css`
  padding: 0 18px 0 10px;
  ${textStyle("body2")};
`;

const fodder = css`
  ${textStyle("body1")};
`;

function setListType(type) {
  switch (type) {
    case "email":
      return email;
    case "fodder":
      return fodder;
    default:
      return null;
  }
}

export const StyledList = styled.ul`
  position: absolute;
  top: 64px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0 -10px, 0);
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out,
    transform 200ms ease-in-out;

  li {
    ${flexbox("start")};
    height: 54px;
    padding: 0 18px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.tertiary};
    transition: background-color 200ms ease-in-out;
    user-select: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundGray};
    }

    ${({ type }) => setListType(type)};
  }

  &.is-open {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 4px, 0);
  }
`;
