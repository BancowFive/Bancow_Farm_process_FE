import styled from "styled-components";

//확인
export const Confirm = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
`;

//평균 n일
export const AverageDate = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
`;

//YYYY년 MM월 DD일
export const SelectedDate = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
`;
