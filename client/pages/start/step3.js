import React from "react";
import { Button } from "../../components/atoms";
import { Footer, ProgressHeader } from "../../components";
import { Container, ImgContainer } from "./style";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { useSelector } from "react-redux";

const Step3 = () => {
  const userId = useSelector(state => state.auth.id);

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
            to={`schedule/${userId}`}
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
