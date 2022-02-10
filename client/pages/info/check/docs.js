import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";
import { Button, ButtonGroup, Container, Footer } from "../../../components";
import { Radio } from "../../../components/atoms/Button/Radio";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { inputCheckDocs, saveDocsCheck } from "../../../reducers/step1";
import { changePage } from "../../../reducers/move";

export const Wrapper = styled.div`
  width: 100%;
  div:not(:last-of-type) {
    margin-bottom: 30px;
  }
  padding-bottom: ${({ showError }) => (showError ? "80px" : "68px")};
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
  const dispatch = useDispatch();

  const userId = useSelector(state => state.auth.id);
  const { saveDocsCheckError } = useSelector(state => state.step1);

  const {
    livestockFarmingBusinessRegistration,
    facilitiesStructure,
    annualFodderCostSpecification,
    annualInspectionReport,
    businessLicense,
  } = useSelector(state => ({
    livestockFarmingBusinessRegistration:
      state.step1.data.livestockFarmingBusinessRegistration,
    facilitiesStructure: state.step1.data.facilitiesStructure,
    annualFodderCostSpecification:
      state.step1.data.annualFodderCostSpecification,
    annualInspectionReport: state.step1.data.annualInspectionReport,
    businessLicense: state.step1.data.businessLicense,
  }));

  //페이지가 렌더링될 때 리덕스에 있는 데이터를 userAnswers에 넣어준다.
  useEffect(() => {
    setUserAnswers({
      livestockFarmingBusinessRegistration,
      facilitiesStructure,
      annualFodderCostSpecification,
      annualInspectionReport,
      businessLicense,
    });
  }, []);

  useEffect(() => {
    //유저의 대답이 바뀔 때 마다 모든항목이 체크되었는지 확인하는 함수 호출(isCheckedAll)
    if (!checkedAll) {
      isCheckedAll();
    }
    //유저 대답이 바뀔 때마다 리덕스에 업데이트
    updateReduxState();
    // console.log(userAnswers);
  }, [userAnswers]);

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

  //리덕스에 상태 업데이트
  const updateReduxState = () => {
    dispatch(
      inputCheckDocs({
        ...userAnswers,
      }),
    );
  };
  const moveToPrev = () => {
    router.push("/info/check/farm");
  };

  const moveToNext = () => {
    if (!checkedAll) {
      handleError();
    } else {
      //api로 데이터 보내기

      //리덕스에 상태 업데이트
      updateReduxState();
      router.push("/done/start_upload");

      //서류 보유 체크 api로 데이터 보내기
      console.log("서류 보유 체크 api로 데이터 보내기");
      dispatch(saveDocsCheck({ data: userAnswers, pageNum: 5, id: userId }));

      if (saveDocsCheckError) {
        //통신 실패시 다음화면 X
        console.log("에러메세지 : ", saveFarmCheckError);
        alert("데이터 저장에 실패 했습니다.");
        return;
      }
      // 페이지 변경 api
      console.log("페이지 변경 api");
      dispatch(changePage({ pageNum: 6, id: userId }));
      router.push("/done/start_upload");
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
                  //초기값이 빈 문자열이라 falsy하기 때문에 이하의 삼항연산자 필요
                  prevAnswer={
                    livestockFarmingBusinessRegistration === true ? true : false
                  }
                >
                  있어요
                </Radio>
                <Radio
                  id="livestockFarmingBusinessRegistration_no"
                  value={false}
                  name="livestockFarmingBusinessRegistration"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={
                    livestockFarmingBusinessRegistration === false
                      ? true
                      : false
                  }
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
                  prevAnswer={facilitiesStructure === true ? true : false}
                >
                  있어요
                </Radio>
                <Radio
                  id="facilitiesStructure_no"
                  value={false}
                  name="facilitiesStructure"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={facilitiesStructure === false ? true : false}
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
                  prevAnswer={
                    annualFodderCostSpecification === true ? true : false
                  }
                >
                  있어요
                </Radio>
                <Radio
                  id="annualFodderCostSpecification_no"
                  value={false}
                  name="annualFodderCostSpecification"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={
                    annualFodderCostSpecification === false ? true : false
                  }
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
                  prevAnswer={annualInspectionReport === true ? true : false}
                >
                  있어요
                </Radio>
                <Radio
                  id="annualInspectionReport_no"
                  value={false}
                  name="annualInspectionReport"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={annualInspectionReport === false ? true : false}
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
                  prevAnswer={businessLicense === true ? true : false}
                >
                  있어요
                </Radio>
                <Radio
                  id="businessLicense_no"
                  value={false}
                  name="businessLicense"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={businessLicense === false ? true : false}
                >
                  없어요
                </Radio>
              </div>
              {showError && userAnswers.businessLicense === "" ? (
                <h4 className="invalid">
                  사업자 등록증 보유 여부를 선택해주세요.
                </h4>
              ) : null}
            </RadioWrapper>
          </Wrapper>
        </div>
        <div className="aside">
          <ButtonGroup className="link">
            <Button
              className="link"
              onClick={moveToPrev}
              variant="ghost"
              size={60}
            >
              이전
            </Button>
            <Button
              className="link"
              onClick={moveToNext}
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
