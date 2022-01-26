import { StyledContainer } from "./style";
import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
