import React from "react";
import { Container, ImgContainer, TryLaterMobile, TryLaterWeb } from "./style";
import Image from "next/image";
import cowAndMePic from "../../public/cow_plus_me.svg";
import { Button, ButtonGroup, Footer, ProgressHeader } from "../../components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const startUpload = () => {
  const router = useRouter();

  // 리덕스에서 아이디 불러오기
  const userId = useSelector(state => state.auth.id);

  const tryLater = () => {
    //로그아웃 api
  };
  const moveToPrev = () => {
    router.push(`/info/check/docs/${userId}`);
  };
  const moveToNext = () => {
    router.push(`/upload_pictures/${userId}`);
  };
  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h1>
            이제부터
            <br />
            농가관련 사진을
            <br />
            올려주세요
          </h1>
          <TryLaterWeb>
            <div className="button-info">
              ‘다음에 하기'는 자동 로그아웃되며
              <br />
              재방문시에는 이어서 진행할 수 있어요.
            </div>
            <button onClick={tryLater} className="try-later-button">
              다음에 하기
            </button>
          </TryLaterWeb>
          <ImgContainer step="upload">
            <Image src={cowAndMePic} alt="소와 나" />
          </ImgContainer>
          <TryLaterMobile>
            <div className="button-info">
              ‘다음에 하기'는 자동 로그아웃되며
              <br />
              재방문시에는 이어서 진행할 수 있어요.
            </div>
            <button onClick={tryLater} className="try-later-button">
              다음에 하기
            </button>
          </TryLaterMobile>
        </div>
        <div className="aside">
          <ButtonGroup className="link">
            <Button
              className="link"
              onClick={moveToPrev}
              variant="ghost"
              size={60}
            >
              이전
            </Button>
            <Button
              className="link"
              onClick={moveToNext}
              variant="primary"
              size={60}
            >
              확인
            </Button>
          </ButtonGroup>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default startUpload;
