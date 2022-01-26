import styled from "styled-components";
import { StyledContainer } from "../../components/Grid/style"

export const Container = styled(StyledContainer)`
  width: 360px;
  height: 600px;
  border: 1px solid red;
  margin: 20px;

  h1{
    margin: 50px 0 0;
    border: 1px solid black;
  }

  h2{
    border: 1px solid pink;
    margin: 12px 0 0;
  }
`

export const Img = styled.div`
  margin: 0 13px 0 0;
  background-color: black;
  width: 300px;
  height: 300px;
`
