import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";
export const StyledFooter = styled.footer`
  display: none;
  height: 60px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  ${textStyle("body3")};
  color: ${({ theme }) => theme.colors.guide};

  div {
    ${flexbox()};
    img {
      display: block;
      margin-right: 10px;
    }
  }
  ul {
    ${flexbox()}
    gap: 10px;

    li:first-child {
      padding-right: 10px;
      border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
    }
  }

  strong {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.2px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.detail};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${flexbox("between")};
  }
`;
