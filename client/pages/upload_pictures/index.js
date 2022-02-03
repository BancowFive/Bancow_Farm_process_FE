import { Button, ButtonGroup } from "../../components";
import ImageInput from "../../components/atoms/Form/ImageInput";
import { StyledContainer } from "../../components/blocks/Grid/style";
import { PictureGuide } from "../../components/blocks/PictureGuide/PictureGuide";

const uploadPicture = () => {
  return (
    <>
      <StyledContainer>
        <h2>
          1차 심사를 위해
          <br />
          농가 사진이 필요해요
        </h2>
        <PictureGuide
          pictureTitle="농장 외부"
          guidance={`주요 건물 전체 모습이 잘 보이게\n찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_outside_farm.png",
            imgSize: 76,
            imgAlt: "농장외부 사진",
          }}
        />

        <ImageInput />

        <PictureGuide
          pictureTitle="농장 내부"
          guidance={`건물 내부의 모습이 한 눈에\n들어올 수 있도록 찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_inside_farm.png",
            imgSize: 76,
            imgAlt: "농장내부 사진",
          }}
        />
        <h2>소 사진을 올려주세요</h2>
        <PictureGuide
          pictureTitle="소 정면"
          guidance={`소 얼굴이 정면을 향하고\n 정지된 상태로 찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_cattle_front.png",
            imgSize: 76,
            imgAlt: "소 정면 사진",
          }}
        />
        <PictureGuide
          pictureTitle="소 측면"
          guidance={`소의 전체적인 모습이 측면을\n 향하게 찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_cattle_side.png",
            imgSize: 76,
            imgAlt: "소 측면 사진",
          }}
        />
        <h2>비품, 기타 사진을 올려주세요</h2>
        <PictureGuide
          pictureTitle="물통"
          guidance={`물통이 정면을 향하게\n 찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_water_trough.png",
            imgSize: 76,
            imgAlt: "물통 사진",
          }}
        />
        <PictureGuide
          pictureTitle="우사 바닥"
          guidance={`전반적인 우사 바닥을\n 찍어주세요.`}
          samplePicture={{
            imgPath: "/sample_pictures/sample_farm_floor.png",
            imgSize: 76,
            imgAlt: "우사바닥 사진",
          }}
        />
      </StyledContainer>
      <ButtonGroup fixed>
        <Button variant="primary" size={60} to="/">
          이전
        </Button>
        <Button
          // onClick={callApi}
          // variant={checkedAll ? "primary" : "ghost"}
          variant="primary"
          size={60}
        >
          다음
        </Button>
      </ButtonGroup>
    </>
  );
};

export default uploadPicture;
