import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  ${flexbox("between")};
  width: 100%;
  height: 80px;
  padding: 0 50px;
  background-color: inherit;

  .header-right {
    ${flexbox("end")};
    gap: 20px;
    ${textStyle("body2")};
    font-weight: 700;
  }
`;
