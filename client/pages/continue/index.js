import React, { useEffect, useState } from "react";
import { Container, ImgContainer } from "./style";
import { Footer, ProgressHeader } from "../../components";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button } from "../../components/atoms";
import { useSelector } from "react-redux";

const Continue = () => {
  const { id, status, pageNum } = useSelector(state => state.auth);
  const [path, setPath] = useState("");

  useEffect(() => {
    console.log(status);
    console.log(pageNum);
    if (status === "STEP1_IN_PROGRESS") {
      console.log("if문 스텝1 실행됨");
      switch (pageNum) {
        case 1:
          setPath(`/terms`);
        case 2:
          setPath(`/info/farm/${id}`);
          break;
        case 3:
          setPath(`/info/personal/${id}`);
          break;
        case 4:
          setPath(`/info/check/farm/${id}`);
          break;
        case 5:
          setPath(`/info/check/docs/${id}`);
          break;
        case 6:
          setPath(`/done/start_upload`);
          break;
        case 7:
          setPath(`/upload_pictures/${id}`);
          break;
        default:
          return;
      }
    } else if (status === "STEP2_IN_PROGRESS") {
      console.log("if문 스텝2 실행됨");
      setPath(`/submit/${id}`);
    } else if (status === "STEP3_IN_PROGRESS") {
      console.log("if문 스텝2 실행됨");
      setPath(`/schedule/${id}`);
    }
  }, []);

  useEffect(() => {
    console.log("변경된값", path);
  }, [path]);

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
          <Button className="link" variant="primary" size={60} block to={path}>
            확인
          </Button>
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default Continue;
