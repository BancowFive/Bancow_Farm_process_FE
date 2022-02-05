import Image from "next/image";
import { useEffect, useState } from "react";
import { Preview, StyledImageInput } from "./style";
import { getS3Auth, uploadToS3 } from "../../../modules/S3";

export const ImageInput = ({
  pictureId,
  previewAlt,
  setuploadedImages,
  showError,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewURL, setPreviewURL] = useState("/");
  const [imageData, setImageData] = useState({
    originalImageName: null,
    changedImageName: null,
    imageUrl: null,
    ImageType: null,
  });

  useEffect(() => {
    getS3Auth();
  }, []);

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
    //업로드 되었는지 체크, 이 함수를 API 통신이 완료 된 후로 옮길 예정
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
