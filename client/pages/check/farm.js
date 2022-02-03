import styled from "styled-components";
import { Button, ButtonGroup } from "../../components";
import Check from "../../components/Check";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CheckWrapper = styled.div`
  height: 90vh;
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const farmCheck = () => {
  const [userAnswers, setUserAnswers] = useState({
    indentification: "",
    ownFarm: "",
    breedingType: "",
    population: "",
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
          농가에 대한 정보를 <br /> 알려주세요
        </h2>
        <CheckWrapper>
          <Check
            title="농장주 본인 이신가요?"
            radioName="indentification"
            leftOption="네"
            leftOptionValue={true}
            rightOption="아니오"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="본인여부를 선택 해주세요."
            showError={showError}
          />
          <Check
            title="농장이 자가인가요?"
            radioName="ownFarm"
            leftOption="네"
            leftOptionValue={true}
            rightOption="아니오"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            invalidMessage="농장이 자가인지 선택 해주세요."
            showError={showError}
          />
          <Check
            title="농장 유형이 무엇인가요?"
            radioName="breedingType"
            leftOption="비육 농장"
            leftOptionValue="비육"
            rightOption="일괄 농장"
            rightOptionValue="일괄"
            setUserAnswers={setUserAnswers}
            invalidMessage="농장 유형을 선택 해주세요."
            showError={showError}
          />
          <Check
            title="가축의 수가 100마리 이상인가요?"
            radioName="population"
            leftOption="100마리 미만"
            leftOptionValue="100마리 미만"
            rightOption="100마리 이상"
            rightOptionValue="100마리 이상"
            setUserAnswers={setUserAnswers}
            invalidMessage="개체 수를 선택 해주세요."
            showError={showError}
          />
        </CheckWrapper>
      </StyledContainer>
      <ButtonGroup fixed>
        <Button variant="primary" size={60} to="/">
          이전
        </Button>
        <Button
          onClick={callApi}
          variant={checkedAll ? "primary" : "ghost"}
          size={60}
        >
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default farmCheck;
