import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${flexbox("between", "start")};
  flex-direction: column;
  max-width: 540px;
  min-width: 360px;
  margin: 0 auto;
  overflow-y: auto;

  .content {
    ${flexbox("start", "start")};
    width: 100%;
    flex: 1;
    margin-bottom: 30px;
    padding: 0 24px;
    flex-direction: column;
    overflow-y: auto;
  }

  h1 {
    display: block;
    width: 280px;
    margin: 50px 0 20px;
    ${textStyle("headline1")};
    word-break: keep-all;
  }

  h2 {
    margin: 34px 0;
    ${textStyle("headline3")};
  }

  div.image-wrapper {
    ${flexbox()};
    width: 100%;
  }

  span.guide {
    display: block;
    margin-bottom: 106px;
    ${textStyle("body2")};
    color: ${({ theme }) => theme.colors.guide};
  }

  span.notice {
    display: block;
    margin-bottom: 4px;
    ${textStyle("body1")};
    color: ${({ theme }) => theme.colors.guide};
  }

  .progressHeader {
    display: none;
  }

  div.aside {
    width: 100%;

    .footer {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    top: 70px;

    .content {
      padding: 0;
    }

    h1 {
      width: 100%;
      margin: 64px 0 24px;
    }
    h2 {
      margin: 30px 0 66px;
    }

    span.guide {
      margin-bottom: 60px;
    }
    div.image-wrapper {
      ${flexbox()};
      span {
        width: 350px !important;
        height: 300px !important;
      }
    }

    div.aside {
      width: 100%;

      .link {
        border-radius: 10px;
      }
    }
  }

  @media (min-width: 1280px) {
    bottom: 125px;

    .content {
      padding: 4px 0 0;
    }

    .progressHeader {
      display: block;
    }
    div.aside {
      .link {
        margin-bottom: 30px;
      }
      .footer {
        ${flexbox("between")};
      }
    }
  }
`;
