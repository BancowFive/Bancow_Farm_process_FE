import { Button } from "../Button";
import { Input } from "../Form";
import { StyledFormGroup } from "./style";
import PropTypes from "prop-types";

export const FormGroup = ({ children, type }) => {
  return <StyledFormGroup type={type}>{children}</StyledFormGroup>;
};

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
