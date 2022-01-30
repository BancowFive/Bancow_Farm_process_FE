import React from "react";
import Image from "next/image";
import left from "../../../public/chevron_left.svg";
import right from "../../../public/chevron_right.svg";
import { StyledCalendarController } from "./style";

export const CalendarController = ({ children, today, month, setMonth }) => {
  //달력 이동
  const changeMonth = change => {
    switch (change) {
      case "add":
        const addedMonth = month.add(1, "month");
        const monthDiff = Math.ceil(addedMonth.diff(today, "month", true));
        if (monthDiff < 4) {
          setMonth(month.add(1, "month"));
        }
        break;
      case "subtract":
        if (month.format("YYYYMM") != today.format("YYYYMM")) {
          setMonth(month.subtract(1, "month"));
        }
        break;
      default:
        return;
    }
  };

  return (
    <StyledCalendarController>
      <button
        onClick={() => {
          changeMonth("subtract");
        }}
      >
        <Image src={left} alt="왼쪽" width={24} height={24} />
      </button>
      <span>{children}</span>
      <button
        onClick={() => {
          changeMonth("add");
        }}
      >
        <Image src={right} alt="왼쪽" width={24} height={24} />
      </button>
    </StyledCalendarController>
  );
};
