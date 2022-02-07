import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { CalendarDay } from "./CalendarDay";
import { CalendarDate } from "./CalendarDate";
import { CalendarController } from "./CalendarController";
import { CalendarContainer, ColorInfomation } from "./style";

export const Calendar = ({
  onClick = () => {},
  disabledDate = [],
  coloredDayInfo = "실사 요청 가능일",
  onDisabledAction = () => {},
}) => {
  const today = dayjs();
  const [month, setMonth] = useState(today);

  return (
    <>
      <CalendarContainer>
        <CalendarController today={today} month={month} setMonth={setMonth}>
          {month.format("YYYY. M")}
        </CalendarController>
        <div className="body">
          <CalendarDate />
          <CalendarDay
            today={today}
            month={month}
            onClick={onClick}
            disabledDate={disabledDate}
            onDisabledAction={onDisabledAction}
          />
          {coloredDayInfo ? (
            <ColorInfomation>
              <div className="pointer info" />
              {coloredDayInfo}
            </ColorInfomation>
          ) : null}
        </div>
      </CalendarContainer>
    </>
  );
};

Calendar.propTypes = {
  onClick: PropTypes.func,
  disabledDate: PropTypes.arrayOf(PropTypes.string),
  coloredDayInfo: PropTypes.string,
  onDisabledAction: PropTypes.func,
};
