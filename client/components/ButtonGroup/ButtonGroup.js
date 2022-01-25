import { StyledButtonGroup } from "./style";
import PropTypes from "prop-types";

export const ButtonGroup = ({ children, width }) => {
  return <StyledButtonGroup width={width}>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
