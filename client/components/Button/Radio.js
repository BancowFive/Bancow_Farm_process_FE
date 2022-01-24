import { StyledButton } from "./style";
import Image from "next/image";
export const Radio = ({ children, id, value, name, size, variant }) => {
  return (
    <StyledButton as="label" htmlFor={id} size={size} variant={variant}>
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
