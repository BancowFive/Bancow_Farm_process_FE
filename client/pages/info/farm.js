import { useCallback, useState, useRef, useEffect } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
  DropDown,
} from "../../components";

const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const Farm = () => {
  const postcodeRef = useRef(null);

  const loadLayout = useCallback(() => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          setPostCode(data.zonecode);
          setAddress(data.roadAddress);
        },
      });
      postcode.open();
    });
  }, []);

  useEffect(() => {
    const isAlready = document.getElementById(id);
    if (!isAlready) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      document.body.append(script);
    }
  }, []);

  const [farmName, setFarmName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");

  const [isOpen, setIsOpen] = useState(true);
  const [fodder, setFodder] = useState("");
  const selectFodder = useCallback(
    value => {
      setIsOpen(!isOpen);
      setFodder(value);
    },
    [isOpen],
  );

  const farmNameChange = event => {
    setFarmName(event.target.value);
  };

  return (
    <>
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
              value={farmName}
              onChange={farmNameChange}
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
              value={postCode}
              readOnly
            />
            <Button
              variant="checked"
              size={56}
              type="button"
              onClick={loadLayout}
            >
              우편번호 검색
            </Button>
          </div>
          <div ref={postcodeRef}></div>
          <div>
            <Input
              size={58}
              variant="primary"
              type="text"
              placeholder="상세주소 입력"
              value={address}
              block
              readOnly
            />
          </div>
        </FormGroup>
        <FormGroup>
          <h3>사료</h3>
          <div>
            <DropDown
              type="fodder"
              onClick={selectFodder}
              isOpen={isOpen}
              block
            />
          </div>
        </FormGroup>
      </Container>
      <ButtonGroup fixed>
        <Button variant="ghost" size={60} to="/info/personal">
          이전
        </Button>
        <Button
          variant={
            farmName && postCode && address && fodder ? "primary" : "ghost"
          }
          disabled={!(farmName && postCode && address && fodder)}
          size={60}
          to="/"
        >
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Farm;
