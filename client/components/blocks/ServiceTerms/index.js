import { StyledServiceTerms } from "./style";
import PropTypes from "prop-types";

export const ServiceTerms = ({ children }) => {
  return <StyledServiceTerms>{children}</StyledServiceTerms>;
};

ServiceTerms.propTypes = {
  children: PropTypes.node.isRequired,
};
