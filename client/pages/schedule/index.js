import React, { useState } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { ToastBar } from "../../components/atoms/Toast";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";
import { Button } from "../../components/atoms/Button";
import { Container, Toast } from "./style";

const Schedule = () => {
  const [selectedDate, setselectedDate] = useState();
  const [isDisabledDay, setIsDisabledDay] = useState(false);
  //useSelect로 가져올 실사예정일
  const isDisable = ["20220210", "20220216", "20220213"];

  const getSelectedDay = day =>
    setselectedDate({
      full: day.format("YYYYMMDD"),
      year: day.format("YYYY"),
      month: day.format("MM"),
      day: day.format("DD"),
    });

  const onDisabledAction = bool => {
    setIsDisabledDay(bool);
  };

  return (
    <Container>
      {selectedDate ? (
        <h2>
          선택한 날짜는
          <br />
          <SelectedDate>{`${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.day}일`}</SelectedDate>{" "}
          이에요
        </h2>
      ) : (
        <h2>
          방문을 원하는 날짜를
          <br />
          선택해주세요
        </h2>
      )}
      <Calendar
        onClick={getSelectedDay}
        disabledDate={isDisable}
        coloredDayInfo="실사 요청 가능일"
        onDisabledAction={onDisabledAction}
      ></Calendar>
      <Toast>
        <ToastBar show={isDisabledDay} width={"196.5px"}>
          해당 날짜는 선택할 수 없습니다
        </ToastBar>
      </Toast>
      <Button
        variant={selectedDate ? "primary" : "ghost"}
        size={60}
        fixed
        block
        disabled={selectedDate ? false : true}
        to={"/"}
      >
        확인
      </Button>
    </Container>
  );
};

export default Schedule;
