import { css } from "styled-components";

// position을 중앙에 배치
export function positionCenter(type = "absolute") {
  return css`
    position: ${type};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
}

// position을 가로축 기준으로 중앙에 배치
export function positionCenterX(type = "absolute") {
  return css`
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
  `;
}

// position을 세로축 기준으로 중앙에 배치
export function positionCenterY(type = "absolute") {
  return css`
    position: ${type};
    top: 50%;
    transform: translateY(-50%);
  `;
}
