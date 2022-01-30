import React, { useState } from "react";
import { StyledCalendarDay } from "./style";

const CalendarDay = ({
  today,
  month,
  onClick = () => {},
  disabledDate = [],
}) => {
  const [isSelected, setIsSelected] = useState("");
  const isToday = today.format("YYYYMMDD");

  //클릭한 날 정보
  const handelClickEvent = (e, everyday, everydayFormat) => {
    if (
      e.target.classList.contains("isDisable") ||
      e.target.classList.contains("isToday") ||
      e.target.classList.contains("isSelected")
    ) {
      return;
    } else {
      setIsSelected(everydayFormat);
      onClick(everyday);
    }
  };

  const createCalendarDay = () => {
    //이번달의 총 날들 (1주 x 6)
    const days = [];
    let passedDay = "";

    for (let week = 0; week <= 5; week += 1) {
      //이번달의 주차
      let weeks = month.startOf("month").startOf("week").add(week, "week");

      days.push(
        <ul key={week + 1}>
          {Array(7)
            .fill(0)
            .map((day, i) => {
              let everyday = weeks.add(i, "day");
              let everydayFormat = everyday.format("YYYYMMDD");

              //지난 날인지 확인
              if (everyday.isBefore(today, "day")) {
                passedDay = everydayFormat;
              }

              //이번달과 같은 날인지 확인
              if (everyday.format("MM") == month.format("MM")) {
                return (
                  <li
                    key={everydayFormat}
                    onClick={e => {
                      handelClickEvent(e, everyday, everydayFormat);
                    }}
                    className={
                      (isToday === everydayFormat ? "isToday " : "") +
                      (isSelected === everydayFormat ? "isSelected " : "") +
                      (disabledDate.includes(everydayFormat)
                        ? "isDisable "
                        : "") +
                      (passedDay === everydayFormat ? "isDisable " : "")
                    }
                  >
                    {everyday.format("D")}
                  </li>
                );
              } else {
                return (
                  <li
                    key={everyday.format("YYYYMMDD")}
                    className="isEmpty"
                  ></li>
                );
              }
            })}
        </ul>,
      );
    }

    return days;
  };

  return <StyledCalendarDay>{createCalendarDay()}</StyledCalendarDay>;
};

export default CalendarDay;
