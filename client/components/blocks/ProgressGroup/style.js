import styled from "styled-components";
import { textStyle } from "../../../styles/utils";

export const StyledContainer = styled.div.attrs(props => ({
  show: props.showProgress ? "block" : "none",
  padding: props.padding ? props.padding : "0 24px",
}))`
  width: 100%;
  padding: ${props => props.padding};
  .isShow {
    display: ${props => props.show};
  }

  span {
    ${textStyle("headline4")};
    color: ${({ theme }) => theme.colors.primary};
  }

  .withoutLogo {
    display: none;
  }
  /* 
  @media (min-width: 540px) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 66px;
    padding: 0;
    .isShow {
      display: block;
    }
    .progressBar {
      margin-top: 14px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .withoutLogo {
      display: inline;
    }
  }
`;
