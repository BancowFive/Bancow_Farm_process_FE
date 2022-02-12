import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FileInput } from "../../components/atoms/Form";
import { ProgressHeader } from "../../components/blocks";
import { Container, FileInputGroup } from "./style";
import { getS3Auth } from "../../utils";
import { submitFiles, changeStep2 } from "../../reducers/step2";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components";
import { useRouter } from "next/router";

const Required = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { livestock, facility, fooder, shipping, business, idCard } =
    useSelector(
      state => ({
        livestock: state.step2.fileType.LIVESTOCK_REGISTRATION,
        facility: state.step2.fileType.STRUCTURAL_DIAGRAM,
        fooder: state.step2.fileType.FEED_STATEMENT,
        shipping: state.step2.fileType.SHIPPING_REPORT,
        business: state.step2.fileType.BUSINESS_REGISTRATION,
        idCard: state.step2.fileType.ID_CARD,
      }),
      shallowEqual,
    );
  const moveAllowed = useSelector(state => state.step2.changeStatus);
  const userId = useSelector(state => state.auth.id);
  const [hasSubmit, setHasSubmit] = useState(false);
  const [askMove, setAskMove] = useState(false);

  //S3 관리자정보 가져오기
  useEffect(() => {
    getS3Auth();
  }, []);

  //페이지 이동
  useEffect(() => {
    if (askMove) router.replace("/done/step2");
  }, [askMove]);

  //제출 Valid check
  useEffect(() => {
    if (livestock && facility && fooder && shipping && business && idCard) {
      setHasSubmit(true);
    }
  }, [livestock, facility, fooder, shipping, business, idCard]);

  const getUploadedFile = useCallback(e => {
    e.preventDefault();
    const file = e.target.files[0];
    const targetId = e.target.id;

    const fileSize = file.size;
    const maxSize = 10 * 1024 * 1024;

    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
      return;
    } else {
      dispatch(submitFiles({ file, targetId, userId }));
    }
  }, []);

  const movePage = useCallback(() => {
    //작동 테스트를 위해 STPE2_COMPLETE 가 아닌 STEP3_START로 변경
    dispatch(changeStep2({ PageNum: "12", inProgress: "STEP3_START", userId }));
    if (moveAllowed === "fulfilled") {
      setAskMove(true);
    }
  }, []);

  return (
    <>
      <Container>
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content">
          <h2>필수 서류를 제출해 주세요</h2>
          <span className="notice">제출할 서류를 선택하세요</span>
          <FileInputGroup>
            <FileInput
              onChange={getUploadedFile}
              variant={livestock != null ? "uploaded" : "unuploaded"}
              id="LIVESTOCK_REGISTRATION"
            >
              가축사육업 등록증
            </FileInput>
            <FileInput
              onChange={getUploadedFile}
              variant={facility != null ? "uploaded" : "unuploaded"}
              id="STRUCTURAL_DIAGRAM"
            >
              축사시설 구조도
            </FileInput>
            <FileInput
              onChange={getUploadedFile}
              variant={fooder != null ? "uploaded" : "unuploaded"}
              id="FEED_STATEMENT"
            >
              사료비 명세서(1년)
            </FileInput>
            <FileInput
              onChange={getUploadedFile}
              variant={shipping != null ? "uploaded" : "unuploaded"}
              id="SHIPPING_REPORT"
            >
              출하 성적서(1년)
            </FileInput>
            <FileInput
              onChange={getUploadedFile}
              variant={business != null ? "uploaded" : "unuploaded"}
              id="BUSINESS_REGISTRATION"
            >
              사업자 등록증
            </FileInput>
            <FileInput
              onChange={getUploadedFile}
              variant={idCard != null ? "uploaded" : "unuploaded"}
              id="ID_CARD"
            >
              농장주 신분증
            </FileInput>
          </FileInputGroup>
        </div>
        <div className="aside">
          <Button
            className="link"
            variant={hasSubmit ? "primary" : "ghost"}
            size={60}
            onClick={movePage}
            block
            disabled={hasSubmit ? false : true}
          >
            제출
          </Button>
          <Footer className="footer" />
        </div>
      </Container>
    </>
  );
};

export default Required;
