import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FileInput } from "../../components/atoms/Form";
import { ProgressHeader } from "../../components/blocks";
import { Header } from "../../components";
import { Container, FileInputGroup } from "./style";
import { getS3Auth } from "../../modules/S3";
import { submitFiles, moveStep } from "../../reducers/step2";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components";

const Required = () => {
  const dispatch = useDispatch();

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
  const userId = useSelector(state => state.step2.id);

  const [hasSubmit, setHasSubmit] = useState(false);

  //S3 관리자정보 가져오기
  useEffect(() => {
    getS3Auth();
  }, []);

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

    dispatch(submitFiles(file, targetId, userId));
  }, []);

  const movePage = useCallback(() => {
    //pageNum, inProgress, id
    dispatch(moveStep("11", "STEP2_COMPLETED", userId));
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ProgressHeader className="progressHeader" />
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
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Required;
