import styled from "styled-components";
import { Button, ButtonGroup } from "../../components";
import Check from "../../components/Check";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CheckWrapper = styled.div`
  height: 100vh;
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const farmCheck = () => {
  const [userAnswers, setUserAnswers] = useState({
    livestockFarmingBusinessRegistration: "",
    facilitiesStructure: "",
    annualFodderCostSpecification: "",
    annualInspectionReport: "",
    businessLicense: "",
  });
  const [checkedAll, setCheckedAll] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //유저의 대답이 바뀔 때 마다 모든항목이 체크되었는지 확인하는 함수 호출(isCheckedAll)
    if (!checkedAll) {
      isCheckedAll();
    }
  }, [userAnswers]);

  console.log(userAnswers);

  const isCheckedAll = () => {
    //선택되지 않은 항목이 있으면(값이 "" 인 객체가 있는지 검사) 다음버튼 비활성화
    for (const [key, value] of Object.entries(userAnswers)) {
      if (value === "") return false;
    }
    setCheckedAll(true);
    return true;
  };

  const handleError = () => {
    //선택을 하지 않은 항목, 즉 빈값이 있으면 showError를 true,
    //showError는 check 컴포넌트 내에서 에러메세지의 노출 여부 결정
    for (const [key, value] of Object.entries(userAnswers)) {
      if (value === "") setShowError(true);
    }
  };

  const callApi = () => {
    if (!checkedAll) {
      handleError();
    } else {
      //api로 데이터 보내기
      router.push("/check/docs");
    }
  };

  return (
    <>
      <StyledContainer>
        <h2>
          서류가 있는지 알려주세요
          <span className="notice">
            지금 갖고 있지 않아도 진행하실 수 있어요
          </span>
        </h2>

        <CheckWrapper>
          <Check
            title="가축 사육업 등록증"
            radioName="livestockFarmingBusinessRegistration"
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="가축사육업 등록증 보유 여부를 선택해주세요."
            showError={showError}
          />
          <Check
            title="축사시설 구조도"
            radioName="facilitiesStructure"
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="축사시설 구조도 보유 여부를 선택해주세요."
            showError={showError}
          />
          <Check
            title="사료비 명세서(1년)"
            radioName="annualFodderCostSpecification"
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="사료비 명세서 보유 여부를 선택해주세요."
            showError={showError}
          />
          <Check
            title="출하 성적서(1년)"
            radioName="annualInspectionReport"
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="출하 성적서 보유 여부를 선택해주세요."
            showError={showError}
          />
          <Check
            title="사업자 등록증"
            radioName="businessLicense"
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="사업자 등록증 보유 여부를 선택해주세요."
            showError={showError}
          />
        </CheckWrapper>
      </StyledContainer>
      <ButtonGroup fixed>
        <Button variant="primary" size={130} to="/">
          이전
        </Button>
        <Button
          onClick={callApi}
          variant={checkedAll ? "primary" : "ghost"}
          size={230}
        >
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default farmCheck;
