import { Container } from "../components/Grid";
import { Button } from "../components/Button";
import { FormGroup } from "../components/FormGroup";
import { Input } from "../components/Form";

const auth = () => {
  return (
    <>
      <Container>
        <h2>
          휴대폰 본인 인증이 <br />
          필요해요
        </h2>
        <FormGroup type="auth">
          <h3>휴대폰 번호</h3>
          <div>
            <Input size={58} variant="primary" type="text" />
            <Button size={56} variant="checked" type="button">
              인증 번호
            </Button>
          </div>
        </FormGroup>
      </Container>
      <Button variant="ghost" size={60} block to="/" disabled>
        다음
      </Button>
    </>
  );
};

export default auth;
