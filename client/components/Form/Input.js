import { StyledInput, StyledInputGroup } from "./style";
import PropTypes from "prop-types";

function getInputIcon(icon) {
  switch (icon) {
    case "clear":
      return <img src="/clear.svg" className="icon" alt="clear icon" />;
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
  icon,
  name,
  placeholder,
  onBlur,
  onChange,
  onClick,
  onFocus,
}) => {
  const element = (
    <StyledInput
      size={size}
      variant={variant}
      type={type}
      value={value}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
    ></StyledInput>
  );
  if (icon || children) {
    return (
      <StyledInputGroup>
        {icon && getInputIcon(icon)}
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
  icon: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};
