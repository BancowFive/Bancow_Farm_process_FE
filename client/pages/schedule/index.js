import React, { useCallback, useState, useEffect } from "react";
import { Calendar } from "../../components/atoms/Calendar";
import { ToastBar } from "../../components/atoms/Toast";
import { SelectedDate } from "../../components/atoms/EmphasizedWord";
import { Header, Footer, ProgressHeader } from "../../components";
import { Button } from "../../components/atoms/Button";
import { Container, Toast } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { submitAvailableDate, changeStep3 } from "../../reducers/step3";
import { useRouter } from "next/router";

const Schedule = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userId = useSelector(state => state.step3.id);
  const moveAllowed = useSelector(state => state.step3.moveStatus);
  const [selectedDate, setselectedDate] = useState();
  const [isDisabledDay, setIsDisabledDay] = useState(false);
  //공휴일 등 실사요청 불가능한 날짜, YYYYMMDD 형태
  const isDisable = ["20220210", "20220216", "20220213"];

  //페이지 이동
  useEffect(() => {
    if (moveAllowed === "fulfilled") router.replace("/done/step3");
  }, [moveAllowed]);

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
        //userId가 안넘어감... 왜? 여기선 71 찍힘
        submitAvailableDate({ fulldate, userId }),
      ).unwrap();

      await dispatch(
        changeStep3({
          PageNum: "14",
          inProgress: "INVESTIGATION_CONFIRM",
          userId,
        }),
      ).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [selectedDate, userId]);

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
