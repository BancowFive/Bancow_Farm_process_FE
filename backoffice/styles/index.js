const breakpoints = {
  tablet: "1024px",
  desktop: "1280px",
};

const fontFamilies = {
  main: "Noto Sans KR, sans-serif",
  sub: "Roboto, sans-serif",
};

const fontSizes = {
  headline1: "28px",
  headline2: "22px",
  headline3: "24px",
  headline4: "18px",
  body1: "16px",
  body2: "14px",
  body3: "12px",
  etc: "17px",
};

const lineHeights = {
  headline1: "38px",
  headline2: "32px",
  headline3: "34px",
  headline4: "26px",
  body1: "22px",
  body2: "20px",
  body3: "18px",
  etc: "20px",
};

const letterSpacings = {
  headline1: "-0.4px",
  headline2: "-0.25px",
  headline3: "-0.25px",
  headline4: "-0.25px",
  body1: "-0.25px",
  body2: "-0.4px",
  body3: "-0.25px",
  etc: "0.2px",
};

const colors = {
  black: "#000000",

  primary: "#222222",
  secondary: "#333333",
  tertiary: "#666666",

  detail: "#888888",
  guide: "#999999",
  placeholder: "#c5c5c5",

  mainBlue: "#2457f7",
  blue: "#3478f5",

  hover: "#1A5FE0",
  active: "#0E44BA",
  borderBlue: "#bdd1ff",
  available: "#e3f0ff",
  backgroundBlue: "#f2f7fd",

  borderGray: "#e5e5e5",
  disabled: "#ebebeb",
  backgroundGray: "#f8f8f8",

  white: "#ffffff",

  valid: "#449aff",
  error: "#ff4e21",
  yellow: "#fac805",
};

// styled-components에서 사용할 theme
export const theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  letterSpacings,
};
