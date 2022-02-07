import PropTypes from "prop-types";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, List } from "../..";
import { StyledDropDown } from "./style";
import { inputFarmFodder } from "../../../reducers/step1";

const emailList = ["@naver.com", "@gmail.com", "직접입력"];
const fodderList = [
  "퓨리나",
  "카길",
  "뉴트리나",
  "농협",
  "팜스코",
  "천하제일",
  "CJ Feed&Care",
  "직접입력",
];

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
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.step1.data);
  const [value, setValue] = useState(
    type === "email"
      ? (email.split("@")[1] && "@" + email.split("@")[1]) ||
          getDataType(type)[0]
      : getDataType(type)[0],
  );

  const handleClick = useCallback(e => {
    setValue(e.target.innerText);
  }, []);

  useEffect(() => {
    if (type === "fodder") {
      dispatch(inputFarmFodder(value));
    }
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

DropDown.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  block: PropTypes.bool,
};
