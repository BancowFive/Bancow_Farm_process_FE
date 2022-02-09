import { Container, ImgContainer } from "./style";
import { Footer, ProgressHeader } from "../../components";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button } from "../../components/atoms";

const Continue = () => {
  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h2>
            입점 신청을
            <br />
            완료하지 않으셨네요
          </h2>
          <h1>이어서 진행할까요?</h1>
          <ImgContainer>
            <Image src={cowAndMePic} alt="소와 나" />
          </ImgContainer>
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

export default Continue;
