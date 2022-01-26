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
        to={to}
        block={block}
        disabled={disabled}
        width={width}
      >
        {disabled ? (
          <>{children}</>
        ) : (
          <Link href={to}>
            <a>{children}</a>
          </Link>
        )}
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
  block: PropTypes.bool,
  width: PropTypes.string,
};
