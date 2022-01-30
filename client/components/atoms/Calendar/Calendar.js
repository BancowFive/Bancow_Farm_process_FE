import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import CalendarDay from "./CalendarDay";
import CalendarDate from "./CalendarDate";
import { CalendarController } from "./CalendarController";
import { CalendarContainer } from "./style";

export const Calendar = ({ onClick, disabledDate }) => {
  const today = dayjs();
  const [month, setMonth] = useState(today);

  return (
    <CalendarContainer>
      <CalendarController today={today} month={month} setMonth={setMonth}>
        {month.format("YYYY. M")}
      </CalendarController>
      <CalendarDate />
      <CalendarDay
        today={today}
        month={month}
        onClick={onClick}
        disabledDate={disabledDate}
      />
    </CalendarContainer>
  );
};
