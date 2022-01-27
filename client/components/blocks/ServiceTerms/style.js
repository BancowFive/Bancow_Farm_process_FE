import styled from "styled-components";
import { flexbox } from "../../../styles/utils";

export const StyledServiceTerms = styled.ul`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 140px;
  ${flexbox("start")};
  flex-direction: column;
  gap: 16px;
`;
