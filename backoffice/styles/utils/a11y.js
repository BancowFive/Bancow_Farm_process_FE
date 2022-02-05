import { css } from "styled-components";

// 태그는 존재하지만 브라우저에서 숨김 (스크린 리더에는 읽힘)
export function visuallyHidden() {
  return css`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  `;
}
