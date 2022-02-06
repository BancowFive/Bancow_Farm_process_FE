import React from "react";
import { Button, AverageDate, ProgressStep } from "../../components/atoms";
import { Header, Footer, ProgressHeader } from "../../components";
import { Container, ButtonInfo, ImgContainer } from "./style";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";

const step2 = () => {
  return (
    <>
      <Container>
        <Header />
        <ProgressHeader
          ProgressType="step"
          activeStep={2}
          className="progressHeader"
        />
        <div className="content">
          <ProgressStep
            className="mobileProgressStep"
            lineStyle={"dashed"}
            activeStep={2}
            growLineBorder={"4px"}
          />
          <h1>2차 신청이 완료되었어요</h1>
          <h2>
            평균 <AverageDate>2일 이내</AverageDate>로
            <br />
            뱅카우가 연락드릴게요
          </h2>
          <ImgContainer>
            <Image src={cowAndMePic} alt="소와 나" />
          </ImgContainer>
          <ButtonInfo>확인을 누르시면 메인페이지로 이동합니다</ButtonInfo>
        </div>
        <div className="aside">
          <Button className="link" variant="primary" size={60} block to="/">
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

export default step2;
