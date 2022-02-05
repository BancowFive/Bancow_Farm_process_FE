import { Container, ButtonInfo, ImgContainer } from "./style";
import { Header, Footer, ProgressHeader } from "../../components";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button, AverageDate, ProgressStep } from "../../components/atoms";

const step1 = () => {
  return (
    <>
      <Container>
        <div className="content">
          <Header />
          <ProgressHeader
            ProgressType="step"
            activeStep={1}
            className="progressHeader"
          />
          <ProgressStep
            className="mobileProgressStep"
            lineStyle={"dashed"}
            activeStep={1}
            growLineBorder={"4px"}
          />
          <h1>1차 신청이 완료되었어요</h1>
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

export default step1;
