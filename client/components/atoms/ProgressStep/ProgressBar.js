import React from "react";
import PropTypes from "prop-types";
import { Container, ActiveProgressLine, ProgressLine } from "./style";

export const ProgressBar = ({
  percentage,
  lineStyle,
  height = "auto",
  width = "auto",
}) => {
  return (
    <Container className="progressContainer" height={height} width={width}>
      <ProgressLine lineStyle={lineStyle} />
      <ActiveProgressLine percentage={percentage} />
    </Container>
  );
};

ProgressBar.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  percentage: PropTypes.string,
  lineStyle: PropTypes.string,
};
