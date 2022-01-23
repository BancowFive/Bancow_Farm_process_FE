import Link from "next/link";
import { StyledButton } from "./style";
import PropTypes from "prop-types";

const Button = ({
  variant,
  children,
  disabled,
  size = 60,
  type = "button",
  onClick,
  onBlur,
  onFocus,
  to,
  width,
}) => {
  if (to) {
    return (
      <StyledButton
        size={size}
        variant={variant}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        as={Link}
        to={to}
        width={width}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      size={size}
      variant={variant}
      type={type}
      disabled={disabled}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.number.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  to: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  width: "100%",
};

export default Button;
