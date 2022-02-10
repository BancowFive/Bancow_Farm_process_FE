import React, { useCallback, useEffect } from "react";
import { Button } from "../../components/atoms";
import { Footer, ProgressHeader } from "../../components";
import { Container, ImgContainer } from "./style";
import { startStep2 } from "../../reducers/step2";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Step2 = () => {
  const userId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const router = useRouter();
  const moveAllowed = useSelector(state => state.step2.startStatus);

  useEffect(() => {
    if (moveAllowed === "fulfilled") router.replace(`/submit/${userId}`);
  }, [moveAllowed]);

  const movePage = useCallback(() => {
    dispatch(
      startStep2({ PageNum: "10", inProgress: "STEP2_IN_PROGRESS", userId }),
    );
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
            이어서 서류를
            <br />
            제출해주세요
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

export default Step2;
