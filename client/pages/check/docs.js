import styled from "styled-components";
import { Button, ButtonGroup } from "../../components";
import Check from "../../components/Check";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { useState } from "react";
import { textStyle } from "../../styles/utils";

const CheckWrapper = styled.div`
  height: 90vh;
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
          서류가 있는지 알려주세요
          <span className="notice">
            지금 갖고 있지 않아도 진행하실 수 있어요
          </span>
        </h2>

        <CheckWrapper>
          <Check
            title="가축사육업 등록증"
            radioName="livestockFarmingBusinessRegistration"
            radioSize={148}
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
            error="본인여부를 선택해주세요"
          />
          <Check
            title="축사시설 구조도"
            radioName="facilitiesStructure"
            radioSize={148}
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
          />
          <Check
            title="사료비 명세서(1년)"
            radioName="annualFodderCostSpecification"
            radioSize={148}
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
          />
          <Check
            title="출하 성적서(1년)"
            radioName="annualInspectionReport"
            radioSize={148}
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
            setUserAnswers={setUserAnswers}
          />
          <Check
            title="사업자 등록증"
            radioName="businessLicense"
            radioSize={148}
            leftOption="있어요"
            leftOptionValue={true}
            rightOption="없어요"
            rightOptionValue={false}
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
