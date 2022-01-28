import React, { useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FileInput } from "../../components/atoms/Form";
import { Container, FileInputGroup } from "./style";
import AWS from "aws-sdk";
import { getS3Auth, uploadToS3 } from "../../modules/S3";

const required = () => {
  //useSelector로 URL정보 불러오기
  const [sample1, setSample1] = useState(1);
  const [sample2, setSample2] = useState(2);
  const [sample3, setSample3] = useState(null);
  const [sample4, setSample4] = useState(null);
  const [sample5, setSample5] = useState(null);
  const [sample6, setSample6] = useState(null);

  const [farmingRegistration, setfarmingRegistration] = useFile(sample1);
  const [facility, setFacility] = useFile(sample2);
  const [fooder, setFooder] = useFile(sample3);
  const [inspectionReport, setInspectionReport] = useFile(sample4);
  const [businessLicense, setBusinessLicense] = useFile(sample5);
  const [idCard, setIdCard] = useFile(sample6);
  const [hasSubmit, setHasSubmit] = useState(false);

  //제출 Valid check
  useEffect(() => {
    if (sample1 && sample2 && sample3 && sample4 && sample5) {
      setHasSubmit(true);
    }
  }, [sample1, sample2, sample3, sample4, sample5]);

  //custom hook
  function useFile(userURL) {
    const [state, setState] = useState({
      variant: "unuploaded",
    });

    //최초 URL 보유여부 체크 & 파일 제출상태 변경
    useEffect(() => {
      if (userURL) setState({ variant: "uploaded" });
    }, []);

    return [state, setState];
  }

  //관리자정보 가져오기
  getS3Auth();

  const getUploadedFile = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const targetId = e.target.id;

    //S3에 파일 업로드
    const s3Url = uploadToS3(file, targetId)
      .then(res => console.log(res.Location))
      .catch(e => console.log(e));

    //store의 url 변경하기 & API로 url 보내기
    changeUrl(s3Url, targetId);
  };

  // S3 이미지 주소 전달 & 파일제출상태 변경
  const changeUrl = (url, target) => {
    switch (target) {
      case "livestockFarmingBusinessRegistration":
        setSample1(url); //reducer 예정
        setfarmingRegistration({ variant: "uploaded" });
        break;
      case "facilitiesStructure":
        setSample2(url);
        setFacility({ variant: "uploaded" });
        break;
      case "annualFodderCostSpecification":
        setSample3(url);
        setFooder({ variant: "uploaded" });
        break;
      case "annualInspectionReport":
        setSample4(url);
        setInspectionReport({ variant: "uploaded" });
        break;
      case "businessLicense":
        setSample5(url);
        setBusinessLicense({ variant: "uploaded" });
        break;
      case "idCard":
        setSample6(url);
        setIdCard({ variant: "uploaded" });
        break;
    }
  };

  return (
    <>
      <Container>
        <h2>필수 서류를 제출해 주세요</h2>
        <span>제출할 서류를 선택하세요</span>
        <FileInputGroup>
          <FileInput
            onChange={getUploadedFile}
            variant={farmingRegistration.variant}
            id="livestockFarmingBusinessRegistration"
            width="312px"
          >
            가축사육업 등록증
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={facility.variant}
            id="facilitiesStructure"
            width="312px"
          >
            축사시설 구조도
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={fooder.variant}
            id="annualFodderCostSpecification"
            width="312px"
          >
            사료비 명세서(1년)
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={inspectionReport.variant}
            id="annualInspectionReport"
            width="312px"
          >
            출하 성적서(1년)
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={businessLicense.variant}
            id="businessLicense"
            width="312px"
          >
            사업자 등록증
          </FileInput>
          <FileInput
            onChange={getUploadedFile}
            variant={idCard.variant}
            id="idCard"
            width="312px"
          >
            농장주 신분증
          </FileInput>
        </FileInputGroup>
      </Container>
      <Button
        variant={hasSubmit ? "primary" : "ghost"}
        size={60}
        block
        fixed
        disabled={hasSubmit ? false : true}
        to={"/"}
      >
        제출
      </Button>
    </>
  );
};

export default required;
