import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import GlobalStyle from "../styles/globalStyle";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  ),
];
