import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/atoms";
import { Footer, ProgressHeader } from "../../components";
import { Container, ImgContainer } from "./style";
import { startStep3 } from "../../reducers/step3";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Step3 = () => {
  const userId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const router = useRouter();
  const moveAllowed = useSelector(state => state.step3.startStatus);
  const [askMove, setAskMove] = useState(false);

  useEffect(() => {
    if (askMove && moveAllowed === "fulfilled")
      router.replace(`/schedule/${userId}`);
  }, [askMove, moveAllowed]);

  const movePage = useCallback(() => {
    dispatch(
      startStep3({ PageNum: "13", inProgress: "STEP3_IN_PROGRESS", userId }),
    );
    setAskMove(true);
  }, []);

  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h2>
            축하합니다
            <br />
            검토가 완료되었어요
          </h2>
          <h1>
            뱅카우가 농장을
            <br />
            방문할 예정이에요
          </h1>
          <ImgContainer>
            <Image src={cowAndMePic} alt="소와 나" />
          </ImgContainer>
        </div>
        <div className="aside">
          <Button
            className="link"
            variant="primary"
            size={60}
            block
            onClick={movePage}
          >
            확인
          </Button>
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default Step3;
