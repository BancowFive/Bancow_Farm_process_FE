import PropTypes from "prop-types";
import { StyledSelectGroup, StyledInput } from "./style";

function getSelectIcon(icon) {
  switch (icon) {
    case "more":
      return <img src="/more.svg" className="icon" alt="more icon" />;
    default:
      return null;
  }
}

export const Select = ({
  size,
  variant,
  placeholder,
  onBlur,
  onChange,
  onClick,
  onFocus,
  icon,
  name,
}) => {
  const element = (
    <StyledInput
      size={size}
      variant={variant}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onChange={onChange}
    ></StyledInput>
  );
  return (
    <StyledSelectGroup>
      {icon && getSelectIcon(icon)}
      {element}
    </StyledSelectGroup>
  );
};

Select.propTypes = {
  size: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
