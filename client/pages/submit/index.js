import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FileInput } from "../../components/atoms/Form";
import { Container, FileInputGroup } from "./style";
import { getS3Auth } from "../../modules/S3";
import { submitFiles, moveStep } from "../../reducers/submit";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const required = () => {
  const dispatch = useDispatch();

  const { livestock, facility, fooder, shipping, business, idCard } =
    useSelector(
      state => ({
        livestock: state.submit.fileType.LIVESTOCK_REGISTRATION,
        facility: state.submit.fileType.STRUCTURAL_DIAGRAM,
        fooder: state.submit.fileType.FEED_STATEMENT,
        shipping: state.submit.fileType.SHIPPING_REPORT,
        business: state.submit.fileType.BUSINESS_REGISTRATION,
        idCard: state.submit.fileType.ID_CARD,
      }),
      shallowEqual,
    );
  const userId = useSelector(state => state.submit.id);

  const [hasSubmit, setHasSubmit] = useState(false);

  //S3 관리자정보 가져오기
  useEffect(() => {
    useCallback(() => getS3Auth(), []);
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
        <h2>필수 서류를 제출해 주세요</h2>
        <span>제출할 서류를 선택하세요</span>
        <FileInputGroup>
          <FileInput
            onChange={getUploadedFile}
            variant={livestock != null ? "uploaded" : "unuploaded"}
            id="LIVESTOCK_REGISTRATION"
            width="312px"
          >
            가축사육업 등록증
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={facility != null ? "uploaded" : "unuploaded"}
            id="STRUCTURAL_DIAGRAM"
            width="312px"
          >
            축사시설 구조도
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={fooder != null ? "uploaded" : "unuploaded"}
            id="FEED_STATEMENT"
            width="312px"
          >
            사료비 명세서(1년)
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={shipping != null ? "uploaded" : "unuploaded"}
            id="SHIPPING_REPORT"
            width="312px"
          >
            출하 성적서(1년)
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={business != null ? "uploaded" : "unuploaded"}
            id="BUSINESS_REGISTRATION"
            width="312px"
          >
            사업자 등록증
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={idCard != null ? "uploaded" : "unuploaded"}
            id="ID_CARD"
            width="312px"
          >
            농장주 신분증
          </FileInput>
        </FileInputGroup>
      </Container>
      <Button
        variant={hasSubmit ? "primary" : "ghost"}
        size={60}
        onClick={movePage}
        block
        fixed
        disabled={hasSubmit ? false : true}
      >
        제출
      </Button>
    </>
  );
};

export default required;
