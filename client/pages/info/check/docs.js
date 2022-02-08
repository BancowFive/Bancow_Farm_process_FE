import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";
import {
  Button,
  ButtonGroup,
  Container,
  Footer,
  Radio,
} from "../../../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Wrapper = styled.div`
  width: 100%;
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
  padding-bottom: ${({ showError }) => (showError ? "80px" : "60px")};
`;

export const InfoTitle = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.tertiary};
  ${textStyle("headline4")};
  span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.guide};
    ${textStyle("body2")};
  }
`;

export const RadioWrapper = styled.div`
  .button-wrapper {
    ${flexbox("between")}
  }
  .invalid {
    color: ${({ theme }) => theme.colors.error};
    ${textStyle("body2")};
  }
`;

const docsCheck = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    livestockFarmingBusinessRegistration: "",
    facilitiesStructure: "",
    annualFodderCostSpecification: "",
    annualInspectionReport: "",
    businessLicense: "",
  });

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
      if (value === "") {
        setShowError(true);
      }
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
      <Container>
        <div className="content">
          <h2>
            서류가 있는지 알려주세요
            <span className="notice">
              지금 갖고 있지 않아도 진행하실 수 있어요
            </span>
          </h2>
          <Wrapper showError={showError}>
            <InfoTitle>가축 사육업 등록증</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="livestockFarmingBusinessRegistration_yes"
                  value={true}
                  name="livestockFarmingBusinessRegistration"
                  setUserAnswers={setUserAnswers}
                >
                  있어요
                </Radio>
                <Radio
                  id="livestockFarmingBusinessRegistration_no"
                  value={false}
                  name="livestockFarmingBusinessRegistration"
                  setUserAnswers={setUserAnswers}
                >
                  없어요
                </Radio>
              </div>
              {showError &&
              userAnswers.livestockFarmingBusinessRegistration === "" ? (
                <h4 className="invalid">
                  가축사육업 등록증 보유 여부를 선택해주세요
                </h4>
              ) : null}
            </RadioWrapper>

            <InfoTitle>축사시설 구조도</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="facilitiesStructure_yes"
                  value={true}
                  name="facilitiesStructure"
                  setUserAnswers={setUserAnswers}
                >
                  있어요
                </Radio>
                <Radio
                  id="facilitiesStructure_no"
                  value={false}
                  name="facilitiesStructure"
                  setUserAnswers={setUserAnswers}
                >
                  없어요
                </Radio>
              </div>
              {showError && userAnswers.facilitiesStructure === "" ? (
                <h4 className="invalid">
                  축사시설 구조도 보유 여부를 선택해주세요.
                </h4>
              ) : null}
            </RadioWrapper>
            <InfoTitle>사료비 명세서(1년)</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="annualFodderCostSpecification_yes"
                  value={true}
                  name="annualFodderCostSpecification"
                  setUserAnswers={setUserAnswers}
                >
                  있어요
                </Radio>
                <Radio
                  id="annualFodderCostSpecification_no"
                  value={false}
                  name="annualFodderCostSpecification"
                  setUserAnswers={setUserAnswers}
                >
                  없어요
                </Radio>
              </div>
              {showError && userAnswers.annualFodderCostSpecification === "" ? (
                <h4 className="invalid">
                  사료비 명세서 보유 여부를 선택해주세요.
                </h4>
              ) : null}
            </RadioWrapper>
            <InfoTitle>출하 성적서(1년)</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="annualInspectionReport_yes"
                  value={true}
                  name="annualInspectionReport"
                  setUserAnswers={setUserAnswers}
                >
                  있어요
                </Radio>
                <Radio
                  id="annualInspectionReport_no"
                  value={false}
                  name="annualInspectionReport"
                  setUserAnswers={setUserAnswers}
                >
                  없어요
                </Radio>
              </div>
              {showError && userAnswers.annualInspectionReport === "" ? (
                <h4 className="invalid">
                  출하 성적서 보유 여부를 선택해주세요.
                </h4>
              ) : null}
            </RadioWrapper>
            <InfoTitle>사업자 등록증</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="businessLicense_yes"
                  value={true}
                  name="businessLicense"
                  setUserAnswers={setUserAnswers}
                >
                  있어요
                </Radio>
                <Radio
                  id="businessLicense_no"
                  value={false}
                  name="businessLicense"
                  setUserAnswers={setUserAnswers}
                >
                  없어요
                </Radio>
              </div>
              {showError && userAnswers.facilitiesStructure === "" ? (
                <h4 className="invalid">
                  사업자 등록증 보유 여부를 선택해주세요.
                </h4>
              ) : null}
            </RadioWrapper>
          </Wrapper>
        </div>
        <div className="aside">
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
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default docsCheck;
