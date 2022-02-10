import React, { useEffect, useState } from "react";
import { Container, ImgContainer } from "./style";
import { Footer, ProgressHeader } from "../../components";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button } from "../../components/atoms";
import { useSelector } from "react-redux";

const Continue = () => {
  const { userId, status } = useSelector(state => state.auth);
  const { pageNum } = useSelector(state => state.data.step1);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (status === "STEP1_IN_PROGRESS") {
      switch (pageNum) {
        case "1":
          setPath(`/terms`);
        case "2":
          setPath(`/info/farm/${userId}`);
          break;
        case "3":
          setPath(`/info/personal/${userId}`);
          break;
        case "4":
          setPath(`/info/check/farm/${userId}`);
          break;
        case "5":
          setPath(`/info/check/docs/${userId}`);
          break;
        case "6":
          setPath(`/done/start_upload`);
          break;
        case "7":
          setPath(`/upload_pictures/${userId}`);
          break;
        default:
          return;
      }
    } else if (status === "STEP2_IN_PROGRESS") {
      setPath(`/submit/${userId}`);
    } else if (status === "STEP3_IN_PROGRESS") {
      setPath(`/schedule/${userId}`);
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
