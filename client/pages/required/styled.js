import styled from "styled-components";
import { StyledContainer } from "../../components/Grid/style";

export const Container = styled(StyledContainer)`
  width: 360px;
  margin: 0 auto;

  h2 {
    margin: 34px 0 8px;
  }
`;

export const FileInputGroup = styled.div`
  margin: 38px 0 120px;

  label + label {
    margin-top: 20px;
  }
`;
