import { Container, ButtonInfo, ImgContainer } from "./style";
import { Footer, ProgressHeader } from "../../components";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button, AverageDate } from "../../components/atoms";

const step1 = () => {
  return (
    <>
      <Container>
        <ProgressHeader
          ProgressType="step"
          activeStep={1}
          className="progressHeader"
          showProgress={true}
          growLineBorder="4px"
        />
        <div className="content">
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
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default step1;
