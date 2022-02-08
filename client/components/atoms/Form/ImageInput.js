import Image from "next/image";
import { useEffect, useState } from "react";
import { Preview, StyledImageInput } from "./style";
import { getS3Auth, uploadToS3 } from "../../../utils/S3";
import { inputPicture } from "../../../reducers/step1";
import { useDispatch, useSelector } from "react-redux";

export const ImageInput = ({
  //사진 항목을 구분하는 id
  pictureId,
  previewAlt,
  setuploadedImages,
  showError,
  savedImage,
  imageIndex,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewURL, setPreviewURL] = useState("/");

  //ImageInput내에서 업로드 된 각 사진의 정보
  const [imageData, setImageData] = useState({
    originalImageName: "",
    changedImageName: "",
    imageUrl: "",
    imageType: "",
  });
  const dispatch = useDispatch();

  //처음 페이지가 렌더링 되었을 때, 기존 데이터가 있을 경우 불러오기
  useEffect(() => {
    //s3 인증 정보 불러오기
    getS3Auth();
    // console.log(savedImage);
    //Props로 전달받은 이미지 URL(saveImage)
    if (savedImage) {
      setShowPreview(true);
      setPreviewURL(savedImage);
      //중간저장 불러오기
      setuploadedImages(prev => ({ ...prev, [pictureId]: true }));
    }
  }, []);

  //이전으로 다녀오더라도 새로 업로드한 사진 반영하기 위해
  // 사용자가 새로 사진을 올리면 redux state 업데이트;
  useEffect(() => {
    if (imageData.imageUrl !== "") {
      dispatch(
        inputPicture({
          imageIndex,
          ...imageData,
        }),
      );
    }
  }, [imageData]);

  const handleChange = async e => {
    //input에 파일을 올리면 s3 업로드에 필요한 매개변수 저장
    const file = e.target.files[0];
    const targetId = e.target.id;
    //s3에 업로드하는 함수 호출
    await uploadImage(file, targetId);
  };

  const uploadImage = async (file, targetId) => {
    //이미지 S3업로드
    const result = await uploadToS3(file, targetId);
    //미리보기 URL 저장
    setPreviewURL(result.Location);
    //preview 노출 여부 변경
    setShowPreview(prev => !prev);
    //API 호출에 필요한 값 세팅
    setImageData(prev => ({
      ...prev,
      originalImageName: file.name,
      changedImageName: result.Key,
      imageUrl: result.Location,
      ImageType: pictureId,
    }));
    //사진 업로드 후 업로드 여부 갱신
    setuploadedImages(prev => ({ ...prev, [pictureId]: true }));
  };

  const uploadToServer = () => {
    //api call
  };
  return (
    <>
      <StyledImageInput
        showError={showError}
        showPreview={showPreview}
        htmlFor={pictureId}
      >
        <div className="wrapper">
          <div className="image-container">
            <Image src="/add.svg" width={40} height={40} />
          </div>
          <span>사진추가</span>
          <input
            onChange={handleChange}
            type="file"
            id={pictureId}
            accept="image/*"
          />
        </div>
      </StyledImageInput>

      <Preview showPreview={showPreview}>
        <div className="image-container">
          <Image src={previewURL} alt={previewAlt} width={312} height={160} />
        </div>
      </Preview>
    </>
  );
};

export default ImageInput;
