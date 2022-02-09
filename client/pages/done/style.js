import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";
import { StyledContainer } from "../../components/blocks/Grid/style";

export const Container = styled(StyledContainer)`
  h1 {
    width: 100%;
    margin: 50px 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin: 12px 0 0;
    ${textStyle("headline2")};
    color: ${({ theme }) => theme.colors.detail};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      margin-top: 74px;
      font-size: 30px;
      line-height: 44px;
      letter-spacing: -0.4px;
    }

    h2 {
      ${textStyle("headline3")};
      margin: 24px 0 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .mobileProgressStep {
      display: none;
    }
  }
`;

export const ImgContainer = styled.div.attrs(props => ({
  margin:
    props.step === "final"
      ? "64px"
      : props.step === "upload"
      ? "84px"
      : "102px",
}))`
  ${flexbox()}
  width: 100%;
  margin-top: ${props => props.margin};

  span {
    width: 312px !important;
    height: 300px !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
    margin-top: 42px;

    span {
      width: 350px !important;
      height: 340px !important;
    }
  }
`;

export const ButtonInfo = styled.div`
  margin: 52px auto 20px;
  ${textStyle("body3")};
  color: ${({ theme }) => theme.colors.detail};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 39px;
  }
`;
export const TryLater = styled.div`
  margin-top: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 10px;
  padding: 16px;
  ${flexbox("between")}
  .button-info {
    ${textStyle("body3")};
    color: ${({ theme }) => theme.colors.guide};
  }

  .try-later-button {
    ${textStyle("body3")};
    color: ${({ theme }) => theme.colors.tertiary};
    text-decoration: underline;
    font-weight: 700;
  }
`;
