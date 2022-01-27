import { StyledTermList } from "./style";
import PropTypes from "prop-types";

export const TermList = ({ children }) => {
  return <StyledTermList>{children}</StyledTermList>;
};

TermList.propTypes = {
  children: PropTypes.node.isRequired,
};
