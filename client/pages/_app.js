import Head from "next/head";
import wrapper from "../store";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import GlobalStyle from "../styles/globalStyle";
import AppLayout from "../components/AppLayout";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";

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
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </PersistGate>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
