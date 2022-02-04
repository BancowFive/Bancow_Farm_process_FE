import Head from "next/head";
import wrapper from "../store";
import { ThemeProvider } from "styled-components";
import { Header } from "../components";
import { theme } from "../styles";
import GlobalStyle from "../styles/globalStyle";
import AppLayout from "../components/AppLayout";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Bancow</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
