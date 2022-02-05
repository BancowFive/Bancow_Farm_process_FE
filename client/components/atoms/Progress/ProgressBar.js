import React from "react";
import PropTypes from "prop-types";
import { Container, ActiveProgressLine, ProgressLine } from "./style";

export const ProgressBar = ({
  className,
  percentage,
  lineStyle,
  height = "100%",
  width = "100%",
  lineBorder = "1.5px",
  activeLineBorder = "3px",
  growLineBorder,
}) => {
  return (
    <Container className={className} height={height} width={width}>
      <ProgressLine
        growLineBorder={growLineBorder}
        lineBorder={lineBorder}
        lineStyle={lineStyle}
      />
      <ActiveProgressLine
        growLineBorder={growLineBorder}
        activeLineBorder={activeLineBorder}
        percentage={percentage}
      />
    </Container>
  );
};

ProgressBar.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  percentage: PropTypes.string,
  lineStyle: PropTypes.string,
  lineBorder: PropTypes.string,
  activeLineBorder: PropTypes.string,
  growLineBorder: PropTypes.string,
  className: PropTypes.string,
};
