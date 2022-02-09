import React from "react";
import { ProgressBar, ProgressStep } from "../../atoms";
import { Header } from "../";
import { StyledContainer } from "./style";
import PropTypes from "prop-types";

export const ProgressHeader = ({
  height,
  width,
  padding,
  className,
  ProgressType = "bar",
  percentage,
  activeStep,
  lineStyle,
  lineBorder = "4px",
  activeLineBorder = "4px",
  growLineBorder,
  showProgress = false,
}) => {
  return (
    <>
      <StyledContainer
        className={className}
        showProgress={showProgress}
        padding={padding}
      >
        <Header />
        <span className="withoutLogo">농가입점신청</span>
        {ProgressType === "bar" ? (
          <ProgressBar
            height={height}
            width={width}
            className="progressBar isShow"
            percentage={percentage}
            lineBorder={lineBorder}
            activeLineBorder={activeLineBorder}
            growLineBorder={growLineBorder}
            lineStyle={lineStyle}
          />
        ) : ProgressType === "step" ? (
          <ProgressStep
            height={height}
            width={width}
            activeStep={activeStep}
            className="progressBar isShow"
            lineBorder={lineBorder}
            growLineBorder={growLineBorder}
            activeLineBorder={activeLineBorder}
            lineStyle="dashed"
          />
        ) : null}
      </StyledContainer>
    </>
  );
};

ProgressStep.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  ProgressType: PropTypes.string,
  percentage: PropTypes.string,
  activeStep: PropTypes.number,
  lineStyle: PropTypes.string,
  lineBorder: PropTypes.string,
  activeLineBorder: PropTypes.string,
  className: PropTypes.any,
  isProgress: PropTypes.bool,
};
