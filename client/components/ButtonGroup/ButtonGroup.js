import { StyledButtonGroup } from "./style";
import PropTypes from "prop-types";

export const ButtonGroup = ({ children }) => {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
