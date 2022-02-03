import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Radio, RadioGroup } from "../../components";
import { Wrapper } from "./style";

const Check = ({
  title,
  radioName,
  leftOption,
  leftOptionValue,
  rightOption,
  rightOptionValue,
  //Check의 setter
  setUserAnswers,
  invalidMessage,
  showError,
}) => {
  //각각의 버튼 체크 여부 상태 (리덕스로 만들어야함. farmcheck에서 체크해야 다음버튼 눌렀을 때 에러 띄울 수 있음.)
  const [checkLeft, setCheckLeft] = useState(false);
  const [checkRight, setCheckRight] = useState(false);

  //하나만 체크 가능한 로직 (라디오 버튼)
  const clickLeft = e => {
    if (!checkLeft) setCheckLeft(prev => !prev);
    if (checkRight) setCheckRight(prev => !prev);
    saveUserAnswer(e);
  };
  const clickRight = e => {
    if (!checkRight) setCheckRight(prev => !prev);
    if (checkLeft) setCheckLeft(prev => !prev);
    saveUserAnswer(e);
  };

  //Check 컴포넌트로 사용자가 선택한 값 넘겨주기
  const saveUserAnswer = e => {
    const { name, value } = e.target;
    setUserAnswers(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
      <RadioGroup>
        <div className="btn-wrapper">
          <Radio
            onClick={clickLeft}
            variant={checkLeft ? "checked" : "unchecked"}
            name={radioName}
            size={58}
            value={leftOptionValue}
          >
            {leftOption}
          </Radio>
          <Radio
            onClick={clickRight}
            variant={checkRight ? "checked" : "unchecked"}
            name={radioName}
            size={58}
            value={rightOptionValue}
          >
            {rightOption}
          </Radio>
        </div>
        <span
          className={
            showError && !checkLeft && !checkRight ? "error" : "invisible"
          }
        >
          {invalidMessage}
        </span>
      </RadioGroup>
    </Wrapper>
  );
};

export default Check;

Check.propTypes = {
  title: PropTypes.string.isRequired,
  radioName: PropTypes.string.isRequired,
  leftOption: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  leftOptionValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  rightOption: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  rightOptionValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};
