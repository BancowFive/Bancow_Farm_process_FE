import { Button, Container, Footer, ProgressHeader } from "../components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h1>
            안녕하세요 <br />
            뱅카우 농가입점을 시작해볼까요?
          </h1>
          <span className="guide">
            간단한 1, 2차 신청 단계를 거쳐 <br />
            마지막으로 실사일 요청을 진행할 거에요.
          </span>
          <div className="image-wrapper">
            <Image src="/landing.png" width={305} height={248} priority />
          </div>
        </div>

        <div className="aside">
          <Button className="link" variant="primary" size={60} to="/auth" block>
            다음
          </Button>
          <Footer />
        </div>
      </Container>
    </>
  );
}
