import styled from "styled-components";
import { textStyle } from "../../styles/utils";
import { theme } from "../../styles";

export const Container = styled.div`
  position: relative;
  padding: 0 24px;
  width: 360px;
  margin: 0 auto;

  h1{
    margin: 50px 0 0;
    ${textStyle("headline1")};
    color: ${theme.colors.primary};
  }

h2{
  margin: 12px 0 0;
  ${textStyle('headline2')};
  color: ${theme.colors.detail};
}
`

export const ImgContainer = styled.div`
  position: absolute;
  top: 297px;
  vertical-align: middle;
`

export const ButtonInfo = styled.div`
  position: absolute;
  top: 648px;
  width: 312px;
  ${textStyle('body3')};
  color: ${theme.colors.detail};
  text-align: center;
`
