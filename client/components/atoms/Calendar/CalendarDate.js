import React from "react";
import { StyledCalendarDate } from "./style";

const CalendarDate = () => {
  const createCalendarDate = () => {
    //요일 형태
    const kr = ["일", "월", "화", "수", "목", "금", "토"];

    const dates = [];
    dates.push(
      <ul key="dates">
        {kr.map((date, i) => {
          return <li key={date}>{date}</li>;
        })}
      </ul>,
    );
    return dates;
  };

  return <StyledCalendarDate>{createCalendarDate()}</StyledCalendarDate>;
};

export default CalendarDate;
