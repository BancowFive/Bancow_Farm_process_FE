import React from "react";
import PropTypes from "prop-types";
import {
  ActiveProgressLine,
  Bars,
  Container,
  Progress,
  ProgressDot,
  ProgressLine,
  Step,
} from "./style";

export const ProgressStep = ({
  height = "31px",
  width = "auto",
  activeStep,
  lineStyle,
}) => {
  return (
    <Container className="progressContainer" height={height} width={width}>
      <Bars>
        <ProgressLine lineStyle={lineStyle} />
        <ActiveProgressLine active={activeStep} />
        <Step step={"1"}>
          <ProgressDot active={activeStep >= 1 && activeStep < 4} />
          <Progress active={activeStep >= 1 && activeStep < 4}>1차</Progress>
        </Step>
        <Step step={"2"}>
          <ProgressDot active={activeStep == 2 || activeStep == 3} />
          <Progress active={activeStep == 2 || activeStep == 3}>2차</Progress>
        </Step>
      </Bars>
      <Step step={"3"}>
        <ProgressDot active={activeStep == 3} />
        <Progress active={activeStep == 3} extraWidth={"23px"}>
          완료
        </Progress>
      </Step>
    </Container>
  );
};

ProgressStep.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  activeStep: PropTypes.number.isRequired,
  lineStyle: PropTypes.string,
};
