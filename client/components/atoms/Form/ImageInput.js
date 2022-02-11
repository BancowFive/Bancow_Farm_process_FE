import Image from "next/image";
import { useEffect, useState } from "react";
import { Preview, Replace, StyledImageInput } from "./style";
import { getS3Auth, uploadToS3 } from "../../../utils/S3";
import { inputPicture, saveFarmPicture } from "../../../reducers/step1";
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

  // 리덕스에서 아이디 불러오기
  const userId = useSelector(state => state.auth.id);

  useEffect(() => {
    //s3 인증 정보 불러오기
    getS3Auth();
    const pictureIndex = savedImage.findIndex(
      image => image.imageType === pictureId,
    );
    if (pictureIndex !== -1) {
      //현재 이미지 찾기
      console.log("체크 ", savedImage[pictureIndex]);
      setShowPreview(true);
      setPreviewURL(savedImage[pictureIndex].imageUrl);
      setuploadedImages(prev => ({ ...prev, [pictureId]: true }));
    }
  }, []);

  useEffect(() => {
    if (imageData.imageUrl !== "") {
      // 사용자가 새로 사진을 올리면 redux state 업데이트;
      dispatch(
        inputPicture({
          ...imageData,
        }),
      );
      //농가 사진 업로드 API  호출
      s3ImageToServer();

      console.log("바뀐 이미지 데이터", imageData.imageUrl);
      setPreview(imageData.imageUrl);
    }
  }, [imageData]);

  const setPreview = s3imageURL => {
    //미리보기 URL 저장
    setPreviewURL(s3imageURL);

    //preview 노출 여부 변경
    setShowPreview(true);
  };

  const handleChange = async e => {
    //input에 파일을 올리면 s3 업로드에 필요한 매개변수 저장
    const file = e.target.files[0];
    const targetId = e.target.id;

    console.log("이미지정보 :", file, targetId);

    // const fileSize = file.size;
    // const maxSize = 10 * 1024 * 1024;

    // if (fileSize > maxSize) {
    //   alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
    //   return;
    // } else {
    //s3에 업로드하는 함수 호출(이 함수의 리턴 값에 s3 이미지 URL도 들어있음.)
    console.log("s3에 업로드하는 함수 호출");
    const s3Data = await uploadToS3(file, targetId, userId);

    console.log("s3데이터: ", s3Data);

    //미리보기 URL 세팅
    console.log("미리보기 URL 세팅");
    setPreview(s3Data.Location);

    //API 호출에 필요한 값 세팅
    setImageData(prev => ({
      ...prev,
      originalImageName: file.name,
      changedImageName: s3Data.Key,
      imageUrl: s3Data.Location,
      imageType: pictureId,
    }));
    //사진 업로드 후 업로드 여부 갱신
    setuploadedImages(prev => ({ ...prev, [pictureId]: true }));
    // }
  };

  const s3ImageToServer = () => {
    console.log("농가이미지 업로드 API 호출");
    dispatch(saveFarmPicture({ data: imageData, id: userId }));
  };

  const replacePicture = () => {};

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
          <Image
            src={previewURL}
            alt={previewAlt}
            layout="fill"
            className={"image"}
          />
        </div>
        <Replace
          showError={showError}
          showPreview={showPreview}
          htmlFor={pictureId}
        >
          <input
            onChange={handleChange}
            type="file"
            id={pictureId}
            accept="image/*"
          />
        </Replace>
      </Preview>
    </>
  );
};

export default ImageInput;
