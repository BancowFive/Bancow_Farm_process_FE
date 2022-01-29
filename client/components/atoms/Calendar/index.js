import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export const Calendar = () => {
  const today = dayjs();
  const [month, setMonth] = useState(today);
  const [selecetdDay, setSelectedDay] = useState({});

  const createCalendar = () => {
    //이번달 날들
    const days = [];

    //이번달 첫째 주
    let weeks = month.startOf("month").startOf("week");

    for (let week = 0; week <= 5; week += 1) {
      if (week > 0) {
        weeks = weeks.add(1, "week");
      }

      days.push(
        <tr key={week + 1}>
          {Array(7)
            .fill(0)
            .map((day, i) => {
              let everyday = weeks.add(i, "day");
              if (everyday.format("MM") == month.format("MM")) {
                return (
                  <td
                    key={everyday.format("YYYYMMDD")}
                    onClick={() => {
                      console.log(`${everyday.format("YYYYMMDD")}가 클릭됨`);
                      setSelectedDay({
                        year: everyday.format("YYYY"),
                        week: everyday.format("M"),
                        day: everyday.format("D"),
                      });
                    }}
                  >
                    {everyday.format("D")}
                  </td>
                );
              } else {
                return <td key={everyday.format("YYYYMMDD")}></td>;
              }
            })}
        </tr>,
      );
    }

    return days;
  };

  const changeMonth = change => {
    switch (change) {
      case "add":
        const addedMonth = month.add(1, "month").month();
        if (addedMonth < today.month() + 4) {
          setMonth(month.add(1, "month"));
        }
        console.log(month.format("YYYYMMDD"));
        break;
      case "subtract":
        if (month.month() != today.month()) {
          setMonth(month.subtract(1, "month"));
        }
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            changeMonth("subtract");
          }}
        >
          왼쪽
        </button>
        <span>{month.format("YYYY.M")}</span>
        <button
          onClick={() => {
            changeMonth("add");
          }}
        >
          오른쪽
        </button>
      </div>
      <div>
        <table>
          {/* <thead>
            <tr>
              <td>월화수목금토</td>
            </tr>
          </thead> */}
          <tbody>{createCalendar()}</tbody>
        </table>
      </div>
    </>
  );
};
