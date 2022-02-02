import styled from "styled-components";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { flexbox } from "../../styles/utils";

// 58px만큼 높이조절 조절 필요
export const Container = styled(StyledContainer)`
  width: 360px;
  margin: 0 auto;
  padding: 0;

  h2 {
    /* margin: 34px 24px 74px; */
    margin: 34px 24px 40px; /* -34px */
  }
`;

export const Toast = styled.div`
  ${flexbox()};
  /* margin: 52px 0 30px; */
  margin: 38px 0 20px; /* -14px  0 -10px */
`;
