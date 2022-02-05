import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

export const GuideWrapper = styled.section`
  width: 100%;
  .picture-title {
    ${textStyle("headline4")};
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 10px;
  }

  .guide-box {
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    border-radius: 10px;
    padding: 16px;
    ${flexbox("between")}

    .text-wrapper {
      margin-right: 16px;
      strong {
        display: block;
        margin-bottom: 6px;
        ${textStyle("body2")};
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 700;
      }
      .guidance {
        white-space: pre-line;
        ${textStyle("body2")};
        color: ${({ theme }) => theme.colors.guide};
      }
    }

    .img-wrapper {
      border-radius: 10px;
    }
  }
`;
