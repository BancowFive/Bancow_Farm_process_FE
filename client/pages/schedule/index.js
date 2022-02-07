import React, { useCallback, useState } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { ToastBar } from "../../components/atoms/Toast";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";
import { Header, Footer, ProgressHeader } from "../../components";
import { Button } from "../../components/atoms/Button";
import { Container, Toast } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { submitAvailableDate, moveStep } from "../../reducers/step3";

const Schedule = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.step3.id);
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
        <Header />
        <ProgressHeader growLineBorder="1px" className="progressHeader" />
        <div className="content">
          {selectedDate ? (
            <h2 className="choose">
              선택한 날짜는&nbsp;
              <SelectedDate>{`${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.day}일`}</SelectedDate>
              &nbsp;이에요
            </h2>
          ) : (
            <h2 className="wait">방문을 원하는 날짜를 선택해주세요</h2>
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
        </div>
        <div className="aside">
          <Button
            className="link"
            variant={selectedDate ? "primary" : "ghost"}
            size={60}
            onClick={handleSubmit}
            block
            disabled={selectedDate ? false : true}
          >
            확인
          </Button>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Schedule;
