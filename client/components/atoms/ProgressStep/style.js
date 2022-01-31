import styled from "styled-components";
import { theme } from "../../../styles";
import { flexbox, textStyle } from "../../../styles/utils";

export const Container = styled.div`
  position: relative;
  min-width: 312px;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Bars = styled.div`
  position: relative;
  ${flexbox("start")}
  flex-grow: 1;
  margin: 0 16px 0 3px;
  height: 14px;
`;

export const Step = styled.div.attrs(props => ({
  left:
    props.step === "1" /* 1차 = 97.5 % 293 = 33.276450 */
      ? "33.276450%"
      : props.step === "2" /* 2차 = 195 % 293 = 66.552901 */
      ? "66.552901%"
      : "auto" /* 완료(3차) = auto */,
  right: props.step === "3" ? "2px" : "auto",
}))`
  ${flexbox()};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${props => props.left};
  right: ${props => props.right};
`;

export const ProgressDot = styled.div.attrs(props => ({
  background: props.active ? `${theme.colors.mainBlue}` : "white",
  border: props.active
    ? `${theme.colors.mainBlue}`
    : `${theme.colors.placeholder}`,
}))`
  width: 14px;
  height: 14px;
  border: 2px solid ${props => props.border};
  border-radius: 50%;
  background-color: ${props => props.background};
`;

export const Progress = styled.div.attrs(props => ({
  width: props.extraWidth || "18px",
  color: props.active ? `${theme.colors.guide}` : `${theme.colors.placeholder}`,
}))`
  text-align: center;
  ${textStyle("body3")}
  color: ${props => props.color};
  margin-top: 1px;
  width: ${props => props.width};
`;

export const ProgressLine = styled.div.attrs(props => ({
  lineStyle: props.lineStyle || "solid",
}))`
  position: absolute;
  min-width: 293px;
  width: 100%;
  border-top: 1.5px ${props => props.lineStyle} ${theme.colors.borderGray};
`;

export const ActiveProgressLine = styled.div.attrs(props => ({
  byPercentage: props.percentage /* 10% 등으로 표시 */,
  byActive:
    props.active == 1 /* 1차 = 99.5 % 293 = 36.348122 */
      ? "33.959044%"
      : props.active == 2 /* 2차 = 197 % 293 = 69.624573 */
      ? "67.235494%"
      : props.active == 3 /* 완료(3차) = auto */
      ? "100%"
      : "0%",
}))`
  position: absolute;
  width: ${props => (props.byPercentage ? props.byPercentage : props.byActive)};
  border-top: 3px solid ${({ theme }) => theme.colors.mainBlue};
  border-radius: 5px;
  transition: ${props =>
    props.byPercentage ? "width 0.3s ease-out" : "default"};
`;
