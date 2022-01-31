import React, { useEffect, useState } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";

const Schedule = () => {
  const [selectedDate, setselectedDate] = useState({});
  //useSelect로 가져올 실사예정일
  const isDisable = ["20220210", "20220216", "20220213"];

  // const getSelectedDay = day =>
  //   selectedDate({
  //     year: day.format("YYYY"),
  //     month: day.format("MM"),
  //     day: day.format("DD"),
  //   });

  // useEffect(() => {
  //   console.log(
  //     `선택한 날짜는 ${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.day}일`,
  //   );
  // }, [selectedDate]);

  return (
    <div>
      {selectedDate ? (
        <SelectedDate>{`${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.day}일`}</SelectedDate>
      ) : null}
      <Calendar></Calendar>
    </div>
  );
};

export default Schedule;
