import { StyledButtonGroup } from "./style";
import PropTypes from "prop-types";

export const ButtonGroup = ({ children, width, link, className }) => {
  return (
    <StyledButtonGroup className={className} link={link} width={width}>
      {children}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  link: PropTypes.bool,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  width: "100%",
};
