import styled from "styled-components";
import { theme } from "../../styles";

//강조되는 단어 스타일들

//확인
export const Confirm = styled.span`
  display: inline-block;
  color: ${theme.colors.blue};
`

//평균 n일
export const AverageDate = styled.span`
  display: inline-block;
  color: ${theme.colors.primary};
`

//YYYY년 MM월 DD일
export const SelectedDate = styled.span`
  display: inline-block;
  color: ${theme.colors.blue};
`
