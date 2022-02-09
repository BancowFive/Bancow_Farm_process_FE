import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";
import { StyledContainer } from "../../components/blocks/Grid/style";

export const Container = styled(StyledContainer)`
  h1 {
    width: 100%;
    height: 76px;
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin: 50px 0 0;
    ${textStyle("headline2")};
    color: ${({ theme }) => theme.colors.detail};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      margin: 24px 0 0;
      font-size: 30px;
      line-height: 44px;
      letter-spacing: -0.4px;
    }
    h2 {
      ${textStyle("headline3")};
      margin: 74px 0 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .mobileProgressStep {
      display: none;
    }
  }
`;

export const ImgContainer = styled.div`
  ${flexbox()}
  width: 100%;
  margin-top: 95px;

  span {
    width: 312px !important;
    height: 300px !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
    margin-top: 0;

    span {
      width: 350px !important;
      height: 340px !important;
    }
  }
`;
