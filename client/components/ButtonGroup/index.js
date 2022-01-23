import Button from "../Button";
import StyledButtonGroup from "./style";
import PropTypes from "prop-types";

const ButtonGroup = ({ size, disabled }) => {
  return (
    <StyledButtonGroup>
      <Button variant="ghost" size={size}>
        이전
      </Button>
      <Button variant="ghost" size={size} disabled={disabled}>
        다음
      </Button>
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  size: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonGroup;
