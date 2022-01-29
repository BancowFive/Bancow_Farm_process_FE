import { Container, FormGroup, Input, Button } from "../../components";
const Farm = () => {
  return (
    <Container>
      <h2>
        간단히 농가에 대해 <br />
        알려주세요
      </h2>
      <FormGroup>
        <h3>농가명</h3>
        <div>
          <Input
            size={58}
            variant="primary"
            type="text"
            placeholder="농가명 입력"
          />
        </div>
      </FormGroup>
      <FormGroup type="address">
        <h3>농가주소</h3>
        <div>
          <Input
            size={58}
            variant="primary"
            type="text"
            placeholder="우편번호"
          />
          <Button variant="checked" size={56} type="button">
            우편번호 검색
          </Button>
          <div>
            <Input
              size={58}
              variant="primary"
              type="text"
              placeholder="상세주소 입력"
            />
          </div>
        </div>
      </FormGroup>
    </Container>
  );
};

export default Farm;
