import styled from "styled-components";
import { textStyle } from "../../styles/utils";
import { StyledContainer } from "../../components/blocks/Grid/style";

export const Container = styled(StyledContainer)`
  h2 {
    margin: 34px 0 8px;
  }
  span.notice {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h2 {
      margin: 30px 0 10px;
      ${textStyle("headline1")};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    div.aside {
      margin: 0;
    }
  }
`;

export const FileInputGroup = styled.div`
  width: 100%;
  margin: 38px 0 30px;

  label + label {
    margin-top: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 30px 0 100px;
    label + label {
      margin-top: 30px;
    }
  }
`;
