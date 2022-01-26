import { StyledButton } from "./style";
import Image from "next/image";
import PropTypes from "prop-types";

export const Radio = ({
  children,
  id,
  value,
  name,
  size,
  variant,
  block,
  width,
}) => {
  return (
    <StyledButton
      as="label"
      htmlFor={id}
      size={size}
      variant={variant}
      block={block}
      width={width}
    >
      {children}
      <div className={variant === "checked" ? "is-active" : ""}>
        {variant === "checked" && (
          <Image src="/checked.svg" width="24px" height="24px" />
        )}
      </div>
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        className="visually-hidden"
      />
    </StyledButton>
  );
};

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired,
  block: PropTypes.bool,
  width: PropTypes.string,
};