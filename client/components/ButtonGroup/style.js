import styled from "styled-components";

import { flexbox } from "../../styles/utils";

const StyledButtonGroup = styled.div`
  ${flexbox("start")};

  button:first-child {
    flex: 4;
  }

  button:nth-child(2) {
    flex: 7;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export default StyledButtonGroup;
