import React from "react";
import { StyledSide } from "./style";
import Image from "next/image";
import logo from "../../../public/bancow_logo_white.svg";

export const Side = () => {
  return (
    <StyledSide>
      <Image src={logo} alt="뱅카우" />
    </StyledSide>
  );
};
