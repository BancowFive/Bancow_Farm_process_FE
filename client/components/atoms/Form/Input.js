import { StyledInput, StyledInputGroup } from "./style";
import PropTypes from "prop-types";

function getInputIcon(icon, onClick) {
  switch (icon) {
    case "clear":
      return (
        <img
          src="/clear.svg"
          className="icon"
          alt="clear icon"
          onClick={onClick}
        />
      );
    default:
      return null;
  }
}

export const Input = ({
  size,
  variant,
  type = "text",
  value,
  children,
  disabled,
  className,
  icon,
  name,
  placeholder,
  onBlur,
  onChange,
  onClick,
  onFocus,
  width,
  maxLength,
  readOnly,
}) => {
  const element = (
    <StyledInput
      size={size}
      variant={variant}
      type={type}
      value={value}
      disabled={disabled}
      className={className}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      width={width}
      maxLength={maxLength}
      readOnly={readOnly}
    ></StyledInput>
  );
  if (icon || children) {
    return (
      <StyledInputGroup width={width}>
        {icon && getInputIcon(icon, onClick)}
        {element}
        {children}
      </StyledInputGroup>
    );
  }
  return element;
};

Input.propTypes = {
  size: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  width: PropTypes.string,
};
