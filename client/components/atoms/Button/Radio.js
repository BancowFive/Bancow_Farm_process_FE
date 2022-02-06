import { RadioInput, RadioLabel } from "./Radio_style";
import PropTypes from "prop-types";

export const Radio = ({ id, value, name, children, setUserAnswers }) => {
  const setValue = e => {
    const { name, value } = e.target;
    setUserAnswers(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <RadioInput
        type="radio"
        id={id}
        value={value}
        name={name}
        onClick={setValue}
      />
      <RadioLabel htmlFor={id}>
        {children}
        <div className="check-icon"></div>
      </RadioLabel>
    </>
  );
};

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  setUserAnswers: PropTypes.func,
};
