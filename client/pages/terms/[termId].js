import styled from "styled-components";
import { flexbox, textStyle } from "../../styles/utils";
import { Button, Container, Footer } from "../../components";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkCollectionOfInformation,
  checkConditionOfUse,
  checkTrustOfInformation,
} from "../../reducers/terms";
const ServiceTerm = () => {
  const dispatch = useDispatch();
  const { conditionOfUse, trustOfInformation, collectionOfInformation } =
    useSelector(state => state.terms);

  const router = useRouter();

  const headline = useMemo(
    () => JSON.parse(router.query.param),
    [router.query],
  );

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

  const backToPage = useCallback(() => {
    router.push("/terms");
  }, []);

  return (
    <ServiceTermWrapper>
      <div className="header">
        <img
          src="/close.svg"
          alt="Detail service term close icon"
          onClick={backToPage}
        />
      </div>
      <Container>
        <div className="content">
          <h3>{headline}</h3>
          <div>
            <p>
              제 1 조 (목적) 1. 본 약관은 기업마당 사이트가 제공하는 모든
              서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 기업마당
              사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을
              목적으로 합니다. 제 2 조 (약관의 효력과 변경) 1. 기업마당 사이트는
              귀하가 본 약관 내용에 동의하는 경우 기업마당 사이트의 서비스 제공
              행위 및 귀하의 서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.
              2. 기업마당 사이트는 본 약관을 사전 고지 없이 변경할 수 있고
              변경된 약관은 기업마당 사이트 내에 공지하거나 e-mail을 통해
              회원에게 공지하며, 공지와 동시에 그 효력이 발생됩니다. 이용자가
              변경된 약관에 동의하지 않는 경우, 이용자는 본인의 회원등록을 취소
              (회원탈락)할 수 있으며 계속 사용의 경우는 약관 변경에 대한 동의로
              간주 됩니다. 제 3 조 (약관 외 준칙) 1. 본 약관에 명시되지 않은
              사항은 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정,
              정보통신 윤리강령, 프로그램보호법 및 기타 관련 법령의 규정에
              의합니다. 제 4 조 (용어의 정의) 본 약관에서 사용하는 용어의 정의는
              다음과 같습니다. 1. 본 약관에 명시되지 않은 사항은 전기통신기본법,
              전기통신사업법, 정보통신윤리위원회심의규정, 정보통신 윤리강령,
              프로그램보호법 및 기타 관련 법령의 규정에 의합니다.
            </p>
          </div>
        </div>
        <div className="aside">
          <Button
            className="link"
            size={60}
            variant="primary"
            to="/terms"
            onClick={selectTerm(router.query.termId)}
            block
          >
            확인
          </Button>
          <Footer className="footer" />
        </div>
      </Container>
    </ServiceTermWrapper>
  );
};

export default ServiceTerm;

const ServiceTermWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${flexbox()};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  div.header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 54px;

    img {
      position: absolute;
      right: 24px;
      top: 15px;
      display: block;
      width: 24px;
      height: 24px;
    }
  }

  div {
    ${flexbox("between")};
    flex-direction: column;

    div.content {
      height: 65vh;
      padding-right: 12px;
      overflow-y: auto;
      h3 {
        margin: 54px 0 30px;
        ${textStyle("headline3")};
      }

      div {
        p {
          ${textStyle("body2")};
          color: ${({ theme }) => theme.colors.tertiary};
          word-break: keep-all;
        }
      }
    }
  }
`;

// ! 약관동의에서 체크하고 상세보기에서 다시 확인하면 체크가 해지됨
