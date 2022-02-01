import { StyledFormGroup } from "./style";
import PropTypes from "prop-types";

export const FormGroup = ({ children, type, width }) => {
  return (
    <StyledFormGroup width={width} type={type}>
      {children}
    </StyledFormGroup>
  );
};

FormGroup.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
