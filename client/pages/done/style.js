import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";

export const Container = styled.div`
  position: relative;
  padding: 0 24px;
  width: 360px;
  margin: 0 auto;

  h1 {
    margin: 50px 0 0;
    ${textStyle("headline1")};
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin: 12px 0 0;
    ${textStyle("headline2")};
    color: ${({ theme }) => theme.colors.detail};
  }
`;

export const ImgContainer = styled.div.attrs(props => ({
  margin: props.step ? "64px" : "102px",
}))`
  height: 300px;
  margin-top: ${props => props.margin};
  vertical-align: middle;
`;

export const ButtonInfo = styled.div`
  margin: 52px 0 20px;
  width: 312px;
  ${textStyle("body3")};
  color: ${({ theme }) => theme.colors.detail};
  text-align: center;
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
