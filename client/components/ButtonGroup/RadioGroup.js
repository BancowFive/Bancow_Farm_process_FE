import { StyledRadioGroup } from "./style";
import PropTypes from "prop-types";

export const RadioGroup = ({ children }) => {
  return <StyledRadioGroup>{children}</StyledRadioGroup>;
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
