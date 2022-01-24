import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import GlobalStyle from "../styles/globalStyle";
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
