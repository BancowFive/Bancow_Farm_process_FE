import PropTypes from "prop-types";
import { StyledSelectGroup } from "./style";
import { Button } from "../Button";

function getSelectIcon(icon, isOpen) {
  switch (icon) {
    case "more":
      return (
        <img
          src="/more.svg"
          className={icon && isOpen ? "icon is-open" : "icon"}
          alt="more icon"
        />
      );
    default:
      return null;
  }
}

export const Select = ({
  isOpen,
  size,
  variant,
  onBlur,
  onChange,
  onClick,
  onFocus,
  icon,
  name,
  block,
}) => {
  const element = (
    <Button
      variant={variant}
      size={size}
      name={name}
      onClick={onClick}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      block={block}
    >
      사료
    </Button>
  );
  return (
    <StyledSelectGroup>
      {icon && getSelectIcon(icon, isOpen)}
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
  isOpen: PropTypes.bool,
  block: PropTypes.bool,
};

export default Select;
