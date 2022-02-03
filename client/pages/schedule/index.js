import React, { useCallback, useState } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { ToastBar } from "../../components/atoms/Toast";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";
import { Button } from "../../components/atoms/Button";
import { Container, Toast } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { submitAvailableDate, moveStep } from "../../reducers/schedule";

const Schedule = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.schedule.id);
  const [selectedDate, setselectedDate] = useState();
  const [isDisabledDay, setIsDisabledDay] = useState(false);
  //공휴일 등 실사요청 불가능한 날짜, YYYYMMDD 형태
  const isDisable = ["20220210", "20220216", "20220213"];

  const getSelectedDay = useCallback(
    day =>
      setselectedDate({
        full: day.format("YYYY-MM-DD"),
        year: day.format("YYYY"),
        month: day.format("MM"),
        day: day.format("DD"),
      }),
    [],
  );

  const onDisabledAction = useCallback(bool => {
    setIsDisabledDay(bool);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      await dispatch(submitAvailableDate(selectedDate.full, userId)).unwrap();
      await dispatch(moveStep("14", "INVESTIGATION_CONFIRM", userId)).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [selectedDate]);

  return (
    <>
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
      </Container>
      <Button
        variant={selectedDate ? "primary" : "ghost"}
        size={60}
        onClick={handleSubmit}
        block
        fixed
        disabled={selectedDate ? false : true}
      >
        확인
      </Button>
    </>
  );
};

export default Schedule;
