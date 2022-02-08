import styled from "styled-components";
import { flexbox, textStyle } from "../../../styles/utils";
import { Button, ButtonGroup, Container } from "../../../components";
import { Radio } from "../../../components/atoms/Button/Radio";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { inputCheckFarm } from "../../../reducers/step1";

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

const farmCheck = () => {
  console.log("안녕");

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
  const dispatch = useDispatch();

  //기존에 저장 값이 있다면 불러오기.
  const { indentification, ownFarm, breedingType, population, ownCCTV } =
    useSelector(state => ({
      indentification: state.step1.data.indentification,
      ownFarm: state.step1.data.ownFarm,
      breedingType: state.step1.data.breedingType,
      population: state.step1.data.population,
      ownCCTV: state.step1.data.ownCCTV,
    }));

  //페이지가 렌더링될 때 리덕스에 있는 데이터를 userAnswers에 넣어준다.
  useEffect(() => {
    setUserAnswers({
      indentification,
      ownFarm,
      breedingType,
      population,
      ownCCTV,
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
      inputCheckFarm({
        ...userAnswers,
      }),
    );
  };
  const moveToPrev = () => {
    router.push("/info/farm");
  };

  const moveToNext = () => {
    if (!checkedAll) {
      handleError();
    } else {
      //api로 데이터 보내기

      //리덕스에 상태 업데이트
      updateReduxState();
      router.push("/info/check/docs");
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
                  //초기값이 빈 문자열이라 falsy하기 때문에 이하의 삼항연산자 필요
                  prevAnswer={indentification === true ? true : false}
                >
                  네
                </Radio>
                <Radio
                  id="indentification_no"
                  value={false}
                  name="indentification"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={indentification === false ? true : false}
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
                  prevAnswer={ownFarm === true ? true : false}
                >
                  네
                </Radio>
                <Radio
                  id="ownFarm_no"
                  value={false}
                  name="ownFarm"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={ownFarm === false ? true : false}
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
                  prevAnswer={breedingType === "비육" ? true : false}
                >
                  비육 농장
                </Radio>
                <Radio
                  id="일괄"
                  value="일괄"
                  name="breedingType"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={breedingType === "일괄" ? true : false}
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
                  prevAnswer={population === "100마리 미만" ? true : false}
                >
                  100마리 미만
                </Radio>
                <Radio
                  id="100마리 이상"
                  value="100마리 이상"
                  name="population"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={population === "100마리 이상" ? true : false}
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
                  prevAnswer={ownCCTV === true ? true : false}
                >
                  네
                </Radio>
                <Radio
                  id="CCTV_no"
                  value={false}
                  name="ownCCTV"
                  setUserAnswers={setUserAnswers}
                  prevAnswer={ownCCTV === false ? true : false}
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
            <Button onClick={moveToPrev} variant="primary" size={60}>
              이전
            </Button>
            <Button
              onClick={moveToNext}
              variant={checkedAll ? "primary" : "ghost"}
              size={60}
            >
              다음
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </>
  );
};

export default farmCheck;
