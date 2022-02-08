import React from "react";
import PropTypes from "prop-types";
import { StyledToastBar } from "./style";

export const ToastBar = ({ children, width, show }) => {
  return (
    <StyledToastBar show={show} width={width}>
      {children}
    </StyledToastBar>
  );
};

ToastBar.propTypes = {
  width: PropTypes.string,
  show: PropTypes.bool,
  children: PropTypes.any,
};
