import { StyledRadioGroup } from "./style";
import PropTypes from "prop-types";

export const RadioGroup = ({ children, width }) => {
  return <StyledRadioGroup width={width}>{children}</StyledRadioGroup>;
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
