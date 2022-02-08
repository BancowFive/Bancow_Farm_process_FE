import styled from "styled-components";
import { textStyle, flexbox } from "../../../styles/utils";

export const StyledToastBar = styled.div.attrs(props => ({
  display: `${props.show ? "block" : "none"}`,
  width: props.width || "auto",
}))`
  display: ${props => props.display};
  ${flexbox()};
  ${textStyle("body2")};
  color: ${({ theme }) => theme.colors.error};
  box-sizing: border-box;
  padding: 9px;
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 10px;
`;
