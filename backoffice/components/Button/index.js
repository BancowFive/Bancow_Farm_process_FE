import { StyledButton } from "./style";

export const Button = ({ children, size, variant }) => {
  return (
    <StyledButton size={size} variant={variant}>
      {children}
    </StyledButton>
  );
};
