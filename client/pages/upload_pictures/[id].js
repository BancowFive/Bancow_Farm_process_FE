import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Container,
  Footer,
  ProgressHeader,
} from "../../components";
import ImageInput from "../../components/atoms/Form/ImageInput";
import { PictureGuide } from "../../components/blocks/PictureGuide/PictureGuide";
import { useRouter } from "next/router";
import { changePage, changeStep } from "../../reducers/move";
import { changeStep2 } from "../../reducers/step2";

const uploadPicture = () => {
  const [isUploadedAll, setIsUploadedAll] = useState(false);
  //각 사진의 업로드 상태
  const [uploadedImages, setuploadedImages] = useState({
    FARM_OUTSIDE: false,
    FARM_INSIDE: false,
    CATTLE_FRONT: false,
    CATTLE_SIDE: false,
    BUCKET: false,
    FLOOR: false,
    VENTILATION_FAN: false,
  });
  // 각 ImageInput에 error표현을 위한 border 노출 여부
  const [showError, setShowError] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const userId = useSelector(state => state.auth.id);

  //리덕스에서 중간 저장 값 가져오기
  const imageArray = useSelector(state => state.step1.data.farmImageUrl);

  useEffect(() => {
    //각 사진을 모두 업로드 하면 버튼 시각적 활성화
    for (const [key, value] of Object.entries(uploadedImages)) {
      if (value === false) return;
    }
    setIsUploadedAll(true);
  }, [uploadedImages]);

  const checkUploadedAll = () => {
    //선택되지 않은 항목이 있으면(값이 "" 인 객체가 있는지 검사) 있으면 에러메세지 노출
    for (const [key, value] of Object.entries(uploadedImages)) {
      if (value === false) {
        //이미 showError가 true이면 리렌더링 방지
        if (!showError) {
          setShowError(true);
        }
        return false;
      }
    }
    return true;
  };
  //이전 버튼 클릭시
  const moveToPrev = () => {
    router.push("/done/start_upload");
  };
  //다음버튼 클릭시
  const moveToNext = () => {
    const result = checkUploadedAll();
    if (result) {
      //페이지 이동
      dispatch(changePage({ PageNum: 8, id: userId }));
      router.push("/done/step1");

      // 스텝 업데이트 api
      dispatch(
        changeStep2({ PageNum: "9", inProgress: "STEP2_START", userId }),
      );
    }
  };
  return (
    <>
      <Container className="upload-padding">
        <ProgressHeader className="progressHeader" growLineBorder="1px" />
        <div className="content upload-padding">
          <h2>
            1차 심사를 위해
            <br />
            농가 사진이 필요해요
          </h2>
          {/* 농장외부 */}
          <PictureGuide
            pictureTitle="농장 외부"
            guidance={`주요 건물 전체 모습이 잘 보이게\n찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_outside_farm.png",
              imgSize: 76,
              imgAlt: "농장외부 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="FARM_OUTSIDE"
            previewAlt="농장 외부사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          {/* 농장내부 */}
          <PictureGuide
            pictureTitle="농장 내부"
            guidance={`건물 내부의 모습이 한 눈에\n들어올 수 있도록 찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_inside_farm.png",
              imgSize: 76,
              imgAlt: "농장내부 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="FARM_INSIDE"
            previewAlt="농장 내부사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          <h2>소 사진을 올려주세요</h2>
          {/* 소 정면 */}
          <PictureGuide
            pictureTitle="소 정면"
            guidance={`소 얼굴이 정면을 향하고\n 정지된 상태로 찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_cattle_front.png",
              imgSize: 76,
              imgAlt: "소 정면 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="CATTLE_FRONT"
            previewAlt="소 정면사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          {/* 소 측면 */}
          <PictureGuide
            pictureTitle="소 측면"
            guidance={`소의 전체적인 모습이 측면을\n 향하게 찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_cattle_side.png",
              imgSize: 76,
              imgAlt: "소 측면 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="CATTLE_SIDE"
            previewAlt="소 측면사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          <h2>비품, 기타 사진을 올려주세요</h2>
          {/* 물통 사진 */}
          <PictureGuide
            pictureTitle="물통"
            guidance={`물통이 정면을 향하게\n 찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_water_trough.png",
              imgSize: 76,
              imgAlt: "물통 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="BUCKET"
            previewAlt="물통 사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          {/* 우사 바닥 */}
          <PictureGuide
            pictureTitle="우사 바닥"
            guidance={`전반적인 우사 바닥을\n 찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_farm_floor.png",
              imgSize: 76,
              imgAlt: "우사바닥 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="FLOOR"
            previewAlt="우사 바닥 사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
          {/* 환풍기 */}
          <PictureGuide
            pictureTitle="환풍기"
            guidance={`축사 내부 환풍기 전체 사진을 \n찍어주세요.`}
            samplePicture={{
              imgPath: "/sample_pictures/sample_farm_ventilator.png",
              imgSize: 76,
              imgAlt: "환풍기 사진",
            }}
          />
          <ImageInput
            savedImage={imageArray}
            pictureId="VENTILATION_FAN"
            previewAlt="환풍기 사진"
            setuploadedImages={setuploadedImages}
            showError={showError}
          />
        </div>
        <div className="aside">
          <ButtonGroup className="link">
            <Button
              className="link"
              variant="ghost"
              size={60}
              onClick={moveToPrev}
            >
              이전
            </Button>
            <Button
              className="link"
              onClick={moveToNext}
              variant={isUploadedAll ? "primary" : "ghost"}
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

export default uploadPicture;
