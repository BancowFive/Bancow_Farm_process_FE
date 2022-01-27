import { useCallback, useState } from "react";
import { Button, Container, ServiceTerm, ServiceTerms } from "../components";
const terms = () => {
  const [selectAll, setSelectAll] = useState(false);

  const selectAllTerms = useCallback(() => {
    setSelectAll(!selectAll);
  }, [selectAll]);

  return (
    <>
      <Container>
        <h2>
          농가입점을 위해 <br />
          약관에 동의해주세요
        </h2>
        <ServiceTerms>
          <ServiceTerm
            selectAll
            checkIcon={selectAll ? "checked" : "unchecked"}
            onSelect={selectAllTerms}
          >
            전체 동의
          </ServiceTerm>
          <ServiceTerm
            checkIcon={selectAll ? "checked" : "unchecked"}
            isRequired
            detailIcon="detail"
          >
            이용약관 동의
          </ServiceTerm>
          <ServiceTerm
            checkIcon={selectAll ? "checked" : "unchecked"}
            isRequired
            detailIcon="detail"
          >
            개인정보 취급 위탁 동의
          </ServiceTerm>
          <ServiceTerm
            checkIcon={selectAll ? "checked" : "unchecked"}
            detailIcon="detail"
          >
            개인정보 선택/수집 이용
          </ServiceTerm>
        </ServiceTerms>
      </Container>
      <Button size={60} variant={"ghost"} disabled to="/" fixed block>
        다음
      </Button>
    </>
  );
};

export default terms;
