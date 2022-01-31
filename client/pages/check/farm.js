import styled from "styled-components";
import { Button, ButtonGroup } from "../../components";
import Check from "../../components/Check";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { useEffect, useState } from "react";

const CheckWrapper = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const farmCheck = () => {
  const [userAnswers, setUserAnswers] = useState({});
  console.log(userAnswers);

  return (
    <>
      <StyledContainer>
        <h2>
          농가에 대한 정보를 <br /> 알려주세요
        </h2>
        <CheckWrapper>
          <Check
            title="농장주 본인 이신가요?"
            // radioId="indentification"
            radioName="indentification"
            radioSize={148}
            leftOption="네"
            leftOptionValue={true}
            rightOption="아니오"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            error="본인여부를 선택해주세요"
          />
          <Check
            title="농장이 자가인가요?"
            // radioId="ownFarm"
            radioName="ownFarm"
            radioSize={148}
            leftOption="네"
            leftOptionValue={true}
            rightOption="아니오"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
          />
          <Check
            title="농장 유형이 무엇인가요?"
            // radioId="breedingType"
            radioName="breedingType"
            radioSize={148}
            leftOption="비육 농장"
            leftOptionValue="비육"
            rightOption="일괄 농장"
            rightOptionValue="일괄"
            setUserAnswers={setUserAnswers}
          />
          <Check
            title="가축의 수가 100마리 이상인가요?"
            // radioId="population"
            radioName="population"
            radioSize={148}
            leftOption="100마리 미만"
            leftOptionValue="100마리 미만"
            rightOption="100마리 이상"
            rightOptionValue="100마리 이상"
            setUserAnswers={setUserAnswers}
          />
        </CheckWrapper>
      </StyledContainer>
      <ButtonGroup fixed>
        <Button variant="disabled" size={130} to="/">
          이전
        </Button>
        <Button variant="disabled" size={230} to="/check/docs">
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default farmCheck;
