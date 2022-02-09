import React from "react";
import { Button } from "../../components/atoms";
import { Footer, ProgressHeader } from "../../components";
import { Container, ImgContainer } from "./style";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";

const Step2 = () => {
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
          <Button className="link" variant="primary" size={60} block to="/">
            확인
          </Button>
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default Step2;
