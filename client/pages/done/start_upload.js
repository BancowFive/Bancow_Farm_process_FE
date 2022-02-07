import React from "react";
import { Container, ButtonInfo, ImgContainer, TryLater } from "./style";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button, ButtonGroup } from "../../components";

const startUpload = () => {
  const tryLater = () => {
    //로그아웃 api
  };
  return (
    <>
      <Container>
        <h1>
          이제부터
          <br />
          농가관련 사진을
          <br />
          올려주세요
        </h1>
        <ImgContainer>
          <Image src={cowAndMePic} alt="소와 나" />
        </ImgContainer>
        <TryLater>
          <div className="button-info">
            ‘다음에 하기'는 자동 로그아웃되며
            <br />
            재방문시에는 이어서 진행할 수 있어요.
          </div>
          <button className="try-later-button">다음에 하기</button>
        </TryLater>
      </Container>
      <ButtonGroup fixed>
        <Button variant="primary" size={60} to="/">
          이전
        </Button>
        <Button onClick={tryLater} variant="primary" size={60}>
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default startUpload;
