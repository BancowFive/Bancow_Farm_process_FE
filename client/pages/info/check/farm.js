import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";
import { Button, ButtonGroup, Container } from "../../components";
import { Radio } from "../../components/atoms/Button/Radio";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "../../../components";

export const Wrapper = styled.div`
  width: 100%;
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
  padding-bottom: ${({ showError }) => (showError ? "80px" : "70px")};
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

const farmCheck = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    indentification: "",
    ownFarm: "",
    breedingType: "",
    population: "",
    ownCCTV: "",
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
            농가에 대한 정보를 <br /> 알려주세요
          </h2>
          <Wrapper showError={showError}>
            <InfoTitle>농장주 본인이신가요?</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="indentification_yes"
                  value={true}
                  name="indentification"
                  setUserAnswers={setUserAnswers}
                >
                  네
                </Radio>
                <Radio
                  id="indentification_no"
                  value={false}
                  name="indentification"
                  setUserAnswers={setUserAnswers}
                >
                  아니오
                </Radio>
              </div>
              {showError && userAnswers.indentification === "" ? (
                <h4 className="invalid">본인 여부를 선택해주세요</h4>
              ) : null}
            </RadioWrapper>

            <InfoTitle>농장이 자가인가요?</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="ownFarm_yes"
                  value={true}
                  name="ownFarm"
                  setUserAnswers={setUserAnswers}
                >
                  네
                </Radio>
                <Radio
                  id="ownFarm_no"
                  value={false}
                  name="ownFarm"
                  setUserAnswers={setUserAnswers}
                >
                  아니오
                </Radio>
              </div>
              {showError && userAnswers.ownFarm === "" ? (
                <h4 className="invalid">농장 자가 여부를 선택해주세요</h4>
              ) : null}
            </RadioWrapper>
            <InfoTitle>
              농장 유형이 무엇인가요?
              <br />
              <span>번식농장에 대해서는 내부 검토중입니다.</span>
            </InfoTitle>

            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="비육"
                  value="비육"
                  name="breedingType"
                  setUserAnswers={setUserAnswers}
                >
                  비육 농장
                </Radio>
                <Radio
                  id="일괄"
                  value="일괄"
                  name="breedingType"
                  setUserAnswers={setUserAnswers}
                >
                  일괄 농장
                </Radio>
              </div>
              {showError && userAnswers.breedingType === "" ? (
                <h4 className="invalid">농장 유형을 선택해주세요</h4>
              ) : null}
            </RadioWrapper>

            <InfoTitle>가축의 수가 100마리 이상인가요?</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="100마리 미만"
                  value="100마리 미만"
                  name="population"
                  setUserAnswers={setUserAnswers}
                >
                  100마리 미만
                </Radio>
                <Radio
                  id="100마리 이상"
                  value="100마리 이상"
                  name="population"
                  setUserAnswers={setUserAnswers}
                >
                  100마리 이상
                </Radio>
              </div>
              {showError && userAnswers.population === "" ? (
                <h4 className="invalid">가축의 수를 선택해주세요</h4>
              ) : null}
            </RadioWrapper>

            <InfoTitle>농장에 CCTV가 있나요?</InfoTitle>
            <RadioWrapper>
              <div className="button-wrapper">
                <Radio
                  id="CCTV_yes"
                  value={true}
                  name="ownCCTV"
                  setUserAnswers={setUserAnswers}
                >
                  네
                </Radio>
                <Radio
                  id="CCTV_no"
                  value={false}
                  name="ownCCTV"
                  setUserAnswers={setUserAnswers}
                >
                  아니오
                </Radio>
              </div>
              {showError && userAnswers.ownCCTV === "" ? (
                <h4 className="invalid">CCTV 보유 여부를 선택해주세요</h4>
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

export default farmCheck;
