import { useState, useCallback, useEffect } from "react";
import { Select, List } from "../..";
import { StyledDropDown } from "./style";

const emailList = ["@naver.com", "@gmail.com", "직접입력"];

export const DropDown = ({ onClick, isOpen, type }) => {
  const [value, setValue] = useState(emailList[0]);

  const handleClick = useCallback(e => {
    setValue(e.target.innerText);
  }, []);

  useEffect(() => {
    onClick(value);
  }, [value]);

  return (
    <StyledDropDown type={type}>
      <Select
        size={58}
        variant="select"
        icon="more"
        block
        onClick={onClick}
        isOpen={isOpen}
      >
        {value}
      </Select>
      <List type={type} isOpen={isOpen}>
        {emailList.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
      </List>
    </StyledDropDown>
  );
};
