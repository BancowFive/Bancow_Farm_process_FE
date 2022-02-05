import React from "react";
import { ProgressBar, ProgressStep } from "../../atoms";
import { StyledContainer } from "./style";
import PropTypes from "prop-types";

export const ProgressHeader = ({
  height,
  width,
  className,
  ProgressType = "bar",
  percentage,
  activeStep,
  lineStyle,
  lineBorder = "4px",
  activeLineBorder = "4px",
  growLineBorder,
}) => {
  return (
    <>
      <StyledContainer className={className}>
        <span>농가입점신청</span>
        {ProgressType === "bar" ? (
          <ProgressBar
            height={height}
            width={width}
            className="progressBar"
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
            className="progressBar"
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
  ProgressType: PropTypes.string,
  percentage: PropTypes.string,
  activeStep: PropTypes.number,
  lineStyle: PropTypes.string,
  lineBorder: PropTypes.string,
  activeLineBorder: PropTypes.string,
  className: PropTypes.any,
};
