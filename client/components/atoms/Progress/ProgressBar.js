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
}) => {
  return (
    <Container className={className} height={height} width={width}>
      <ProgressLine lineBorder={lineBorder} lineStyle={lineStyle} />
      <ActiveProgressLine
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
};
