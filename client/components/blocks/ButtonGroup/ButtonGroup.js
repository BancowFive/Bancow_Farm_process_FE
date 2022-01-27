import { StyledButtonGroup } from "./style";
import PropTypes from "prop-types";

export const ButtonGroup = ({ children, width, fixed, className }) => {
  return (
    <StyledButtonGroup className={className} fixed={fixed} width={width}>
      {children}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  fixed: PropTypes.bool,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  width: "100%",
};
