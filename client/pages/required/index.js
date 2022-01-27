import React, { useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button";
import { FileInput } from "../../components/atoms/Form";
import { Container, FileInputGroup } from "./style";

const required = () => {
  //useSelector로 URL정보 불러오기
  const [sample1, setSample1] = useState(1);
  const [sample2, setSample2] = useState(2);
  const [sample3, setSample3] = useState(null);
  const [sample4, setSample4] = useState(null);
  const [sample5, setSample5] = useState(null);

  const [farmingRegistration, setfarmingRegistration] = useFile(sample1);
  const [facility, setFacility] = useFile(sample2);
  const [fooder, setFooder] = useFile(sample3);
  const [inspectionReport, setInspectionReport] = useFile(sample4);
  const [businessLicense, setBusinessLicense] = useFile(sample5);
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
      url: userURL,
      variant: "unuploaded",
    });

    useEffect(() => {
      if (state.url === null) {
        setState({ ...state, variant: "unuploaded" });
      } else if (state.url) {
        setState({ ...state, variant: "uploaded" });
      }
    }, [state.url]);

    useEffect(() => {}, [state.variant]);

    return [state, setState];
  }

  const getUploadedFile = e => {
    e.preventDefault();
    console.log(e.target.files[0]);
    //S3에 파일 보내기
    //store의 url 변경하기
    //파일확인을 위한 모달창 띄우기
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
