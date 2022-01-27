import { useCallback, useState } from "react";
import { Button, Container, ServiceTerm, ServiceTerms } from "../components";
const terms = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [conditionOfUse, setConditionOfUse] = useState(false);
  const [collectionOfInformation, setCollectionOfInformation] = useState(false);
  const [trustOfInformation, setTrustOfInformation] = useState(false);

  const selectAllTerms = useCallback(() => {
    setSelectAll(!selectAll);
    setConditionOfUse(!selectAll);
    setCollectionOfInformation(!selectAll);
    setTrustOfInformation(!selectAll);
  }, [selectAll]);

  const selectTerm = useCallback(
    (func, term) => () => {
      if (selectAll && term) {
        func(false);
        setSelectAll(false);
      } else {
        func(!term);
      }
    },
    [conditionOfUse, collectionOfInformation, trustOfInformation, selectAll],
  );

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
            checkIcon={
              selectAll ? "checked" : conditionOfUse ? "checked" : "unchecked"
            }
            isRequired
            detailIcon="detail"
            onSelect={selectTerm(setConditionOfUse, conditionOfUse)}
          >
            이용약관 동의
          </ServiceTerm>
          <ServiceTerm
            checkIcon={
              selectAll
                ? "checked"
                : collectionOfInformation
                ? "checked"
                : "unchecked"
            }
            onSelect={selectTerm(
              setCollectionOfInformation,
              collectionOfInformation,
            )}
            isRequired
            detailIcon="detail"
          >
            개인정보 취급 위탁 동의
          </ServiceTerm>
          <ServiceTerm
            checkIcon={
              selectAll
                ? "checked"
                : trustOfInformation
                ? "checked"
                : "unchecked"
            }
            onSelect={selectTerm(setTrustOfInformation, trustOfInformation)}
            detailIcon="detail"
          >
            개인정보 선택/수집 이용
          </ServiceTerm>
        </ServiceTerms>
      </Container>
      <Button
        size={60}
        variant={
          conditionOfUse && collectionOfInformation ? "primary" : "ghost"
        }
        disabled={!(conditionOfUse && collectionOfInformation)}
        to="/"
        fixed
        block
      >
        다음
      </Button>
    </>
  );
};

export default terms;
