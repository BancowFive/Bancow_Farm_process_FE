import { createGlobalStyle } from "styled-components";
import { textStyle, visuallyHidden } from "./utils";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamilies.main};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html {
    font-family: ${({ theme }) => theme.fontFamilies.main};
    ${textStyle("body1")}
  }
  body {
    font-family: ${({ theme }) => theme.fontFamilies.main};
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.primary};
  }
  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  button {
    padding: 0;
  }
  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
  address {
    font-style: normal;
  }
  .visually-hidden {
    ${visuallyHidden()}
  }
`;

export default GlobalStyle;
