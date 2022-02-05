import { css } from "styled-components";

import { theme } from "../index";

// text style 별로 font-size, line-height, letter-spacing를 묶은 겁니다.
export function textStyle(size) {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.lineHeights[size]};
    letter-spacing: ${theme.letterSpacings[size]};
  `;
}

// 한 줄짜리 말줄임
export function truncate() {
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
}

// 여러 줄에 대한 말줄임
export function lineClamp(line) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
}
