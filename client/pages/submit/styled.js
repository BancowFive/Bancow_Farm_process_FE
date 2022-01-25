import styled from "styled-components";
import { StyledContainer } from "../../components/Grid/style"
import { textStyle } from "../../styles/utils";
import { theme } from "../../styles";

export const Container = styled(StyledContainer)`
  width: 360px;
  margin: 0 auto;

  h1{
    margin: 50px 0 0;
    color: ${theme.colors.primary};
  }

  p{
    ${textStyle('headline2')};
    margin: 12px 0 0;
    color: ${theme.colors.detail};
  }

  img{
    margin-top: 102px;
    vertical-align: middle;
  }
`

export const AverageDate = styled.div`
  display: inline-block;
  ${textStyle('headline2')};
  color: ${theme.colors.primary};
`

export const Info = styled.div`
  width: 312px;
  margin: 52px 0 20px;
  ${textStyle('body3')};
  color: ${theme.colors.detail};
  text-align: center;
`
