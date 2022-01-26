import { Button, Container } from "../components";
import Image from "next/image";
import { useCallback } from "react";

export default function Home() {
  console.log("Home");

  const handleClick = useCallback(() => {
    console.log("Home: Auth로 이동");
  }, []);
  return (
    <>
      <Container>
        <h1>
          안녕하세요 <br />
          뱅카우 농가입점을 <br />
          시작해볼까요?
        </h1>
        <span>
          간단한 1, 2차 신청 단계를 거쳐 <br />
          마지막으로 실사일 요청을 진행할 거에요.
        </span>
        <Image src="/landing.png" width={305} height={248} />
      </Container>
      <Button
        onClick={handleClick}
        variant="primary"
        size={60}
        block
        to="/auth"
      >
        다음
      </Button>
    </>
  );
}
