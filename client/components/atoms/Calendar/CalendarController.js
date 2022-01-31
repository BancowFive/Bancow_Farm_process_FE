import React, { useEffect, useState } from "react";
import Image from "next/image";
import leftGray from "../../../public/chevron_left_gray.svg";
import leftBlack from "../../../public/chevron_left_black.svg";
import rightGray from "../../../public/chevron_right_gray.svg";
import rightBlack from "../../../public/chevron_right_black.svg";
import { StyledCalendarController } from "./style";

export const CalendarController = ({ children, today, month, setMonth }) => {
  const [isgoBack, setIsGoBack] = useState(false);
  const [isgoForward, setIsGoForward] = useState(true);

  useEffect(() => {
    if (month.format("YYYYMM") === today.format("YYYYMM")) {
      setIsGoBack(false);
    } else {
      setIsGoBack(true);
    }

    const monthDiff = Math.ceil(month.diff(today, "month", true));

    if (monthDiff === 3) {
      setIsGoForward(false);
    } else {
      setIsGoForward(true);
    }
  }, [month]);

  //달력 이동
  const changeMonth = change => {
    switch (change) {
      case "add":
        const addedMonth = month.add(1, "month");
        const monthDiff = Math.ceil(addedMonth.diff(today, "month", true));
        if (monthDiff <= 3) {
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
        <Image
          src={isgoBack ? leftBlack : leftGray}
          alt="왼쪽"
          width={24}
          height={24}
        />
      </button>
      <span>{children}</span>
      <button
        onClick={() => {
          changeMonth("add");
        }}
      >
        <Image
          src={isgoForward ? rightBlack : rightGray}
          alt="왼쪽"
          width={24}
          height={24}
        />
      </button>
    </StyledCalendarController>
  );
};
