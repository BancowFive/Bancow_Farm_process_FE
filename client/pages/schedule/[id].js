import React, { useCallback, useState, useEffect } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { ToastBar } from "../../components/atoms/Toast";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";
import { Footer, ProgressHeader } from "../../components";
import { Button } from "../../components/atoms/Button";
import { Container, Toast } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { submitAvailableDate, changeStep3 } from "../../reducers/step3";
import { useRouter } from "next/router";

const Schedule = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userId = useSelector(state => state.auth.id);
  //공휴일 등 실사요청 불가능한 날짜, YYYYMMDD 형태
  const isDisable = useSelector(state => state.step3.noReservationDate);
  const moveAllowed = useSelector(state => state.step3.changeStatus);
  const [askMove, setAskMove] = useState(false);
  const [selectedDate, setselectedDate] = useState();
  const [isDisabledDay, setIsDisabledDay] = useState(false);

  //페이지 이동
  useEffect(() => {
    if (askMove) router.replace("/done/step3");
  }, [askMove]);

  const getSelectedDay = useCallback(
    day =>
      setselectedDate({
        fulldate: day.format("YYYY-MM-DD"),
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
      const fulldate = selectedDate.fulldate;
      await dispatch(
        submitAvailableDate({ date: fulldate, PageNum: "14", userId }),
      ).unwrap();

      await dispatch(
        changeStep3({
          PageNum: "14",
          inProgress: "STEP3_COMPLETED",
          userId,
        }),
      ).unwrap();
      if (moveAllowed === "fulfilled") {
        setAskMove(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [selectedDate, userId]);

  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
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
          <Toast show={isDisabledDay}>
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
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default Schedule;
