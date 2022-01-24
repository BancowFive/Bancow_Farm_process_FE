import Link from "next/link";
import { StyledButton } from "./style";
import PropTypes from "prop-types";

export const Button = ({
  variant,
  children,
  disabled,
  size = 60,
  type = "button",
  onClick,
  onBlur,
  onFocus,
  to,
  block,
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
        block={block}
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
      block={block}
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
  block: PropTypes.bool,
};
