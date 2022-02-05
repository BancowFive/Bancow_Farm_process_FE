import { css } from "styled-components";

// flexbox 사용할 때, 편하게 사용하기 위한 단축어 설정
function convertFullName(value) {
  switch (value) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    default:
      return value;
  }
}

// flexbox 설정
export function flexbox(jc = "center", ai = "center") {
  return css`
    display: flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `;
}

// inline-flexbox 설정
export function inlineFlexbox(jc = "center", ai = "center") {
  return css`
    display: inline-flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `;
}
