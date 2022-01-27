import { useState } from "react";
import { Radio, RadioGroup } from "../../components";
import { Wrapper } from "./style";

const Check = ({ title, radioName, radioSize, option1, option2 }) => {
  const [checkFirst, setCheckFirst] = useState(false);
  const [checkSecond, setCheckSecond] = useState(false);

  const finalChoice = value => {
    setUserChoice(value);
  };

  const clickFirst = () => {
    if (!checkFirst) {
      setCheckFirst(prev => !prev);
    }
    if (checkSecond) {
      setCheckSecond(prev => !prev);
    }
  };
  const clickSecond = () => {
    if (!checkSecond) {
      setCheckSecond(prev => !prev);
    }
    if (checkFirst) {
      setCheckFirst(prev => !prev);
    }
  };

  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
      <RadioGroup>
        <div className="btn-wrapper">
          <Radio
            onClick={clickFirst}
            variant={checkFirst ? "checked" : "unchecked"}
            name={radioName}
            size={radioSize}
            value={option1}
          >
            {option1}
          </Radio>
          <Radio
            onClick={clickSecond}
            variant={checkSecond ? "checked" : "unchecked"}
            name={radioName}
            size={radioSize}
            value={option2}
          >
            {option2}
          </Radio>
        </div>
      </RadioGroup>
    </Wrapper>
  );
};

export default Check;
