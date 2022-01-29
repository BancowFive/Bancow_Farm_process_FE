import { StyledList } from "./style";
export const List = ({ children, isOpen, type }) => {
  return (
    <StyledList className={isOpen ? "is-open" : ""} type={type}>
      {children}
    </StyledList>
  );
};
