import React from "react";
import { ProgressBar } from "../../atoms";
import { StyledContainer } from "./style";

export const ProgressHeader = ({
  className,
  percentage,
  lineBorder = "4px",
  activeLineBorder = "4px",
}) => {
  return (
    <>
      <StyledContainer className={className}>
        <span>농가입점신청</span>
        <ProgressBar
          className="progressBar"
          percentage={percentage}
          lineBorder={lineBorder}
          activeLineBorder={activeLineBorder}
        />
      </StyledContainer>
    </>
  );
};
