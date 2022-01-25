import styled, { css } from "styled-components";

import { flexbox } from "../../styles/utils";

export const StyledButtonGroup = styled.div`
  ${flexbox("start")};

  button:first-child {
    flex: 4;
  }

  button:nth-child(2) {
    flex: 7;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
  }

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;

export const StyledRadioGroup = styled.div`
  ${flexbox("start")};
  gap: 16px;

  label:first-child {
    flex: 1;
  }

  label:nth-child(2) {
    flex: 1;
  }

  ${({ width }) =>
    css`
      width: ${width};
    `}
`;
