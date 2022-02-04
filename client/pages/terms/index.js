import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkConditionOfUse,
  checkTrustOfInformation,
  checkCollectionOfInformation,
  selectAll,
} from "../../reducers/terms";
import {
  Container,
  TermList,
  TermItem,
  Button,
  Footer,
} from "../../components";
import { useResponsive } from "../../hooks";

const ServiceTerms = () => {
  const [width] = useResponsive();
  const dispatch = useDispatch();
  const { conditionOfUse, trustOfInformation, collectionOfInformation } =
    useSelector(state => state.terms);

  const selectAllTerms = useCallback(() => {
    dispatch(selectAll());
  }, [conditionOfUse, trustOfInformation, collectionOfInformation]);

  const selectTerm = useCallback(
    value => () => {
      if ("conditionOfUse" === value) {
        dispatch(checkConditionOfUse());
      } else if ("trustOfInformation" === value) {
        dispatch(checkTrustOfInformation());
      } else if ("collectionOfInformation" === value) {
        dispatch(checkCollectionOfInformation());
      }
    },
    [conditionOfUse, trustOfInformation, collectionOfInformation],
  );

  return (
    <>
      <Container>
        <h2>
          농가입점을 위해 <br />
          약관에 동의해주세요
        </h2>
        <TermList>
          <TermItem
            selectAll
            checkIcon={
              conditionOfUse && trustOfInformation && collectionOfInformation
                ? "checked"
                : "unchecked"
            }
            onSelect={selectAllTerms}
          >
            전체 동의
          </TermItem>
          <TermItem
            checkIcon={conditionOfUse ? "checked" : "unchecked"}
            isRequired
            detailIcon="detail"
            to={`/terms/conditionOfUse`}
            onSelect={selectTerm("conditionOfUse")}
          >
            이용약관 동의
          </TermItem>
          <TermItem
            checkIcon={trustOfInformation ? "checked" : "unchecked"}
            onSelect={selectTerm("trustOfInformation")}
            isRequired
            detailIcon="detail"
            to={`/terms/trustOfInformation`}
          >
            개인정보 취급 위탁 동의
          </TermItem>
          <TermItem
            checkIcon={collectionOfInformation ? "checked" : "unchecked"}
            onSelect={selectTerm("collectionOfInformation")}
            detailIcon="detail"
            to={`/terms/collectionOfInformation`}
          >
            개인정보 선택/수집 이용
          </TermItem>
        </TermList>
        {width > 768 && (
          <div className="aside">
            <Button
              className="link"
              size={60}
              variant={
                conditionOfUse && trustOfInformation ? "primary" : "ghost"
              }
              disabled={!(conditionOfUse && trustOfInformation)}
              to="/info/personal"
              block
            >
              다음
            </Button>
            <Footer />
          </div>
        )}
      </Container>
      {width <= 768 && (
        <Button
          className="link"
          size={60}
          variant={conditionOfUse && trustOfInformation ? "primary" : "ghost"}
          disabled={!(conditionOfUse && trustOfInformation)}
          to="/info/personal"
          block
          fixed
        >
          다음
        </Button>
      )}
    </>
  );
};

export default ServiceTerms;
