import { useState, useCallback, useEffect } from "react";
import { Select, List } from "../..";
import { StyledDropDown } from "./style";

const emailList = ["@naver.com", "@gmail.com", "직접입력"];
const fodderList = ["뉴트리나", "퓨리나", "직접입력"];

const getDataType = type => {
  switch (type) {
    case "email":
      return emailList;
    case "fodder":
      return fodderList;
    default:
      return null;
  }
};

export const DropDown = ({ onClick, isOpen, type, block }) => {
  const [value, setValue] = useState(getDataType(type)[0]);

  const handleClick = useCallback(e => {
    setValue(e.target.innerText);
  }, []);

  useEffect(() => {
    if (onClick) {
      onClick(value);
    }
  }, [value]);

  return (
    <StyledDropDown type={type} block={block}>
      <Select
        size={58}
        variant="select"
        icon="more"
        block={block}
        onClick={onClick}
        isOpen={isOpen}
      >
        {value}
      </Select>
      {isOpen && (
        <List type={type} isOpen={isOpen}>
          {getDataType(type).map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))}
        </List>
      )}
    </StyledDropDown>
  );
};
