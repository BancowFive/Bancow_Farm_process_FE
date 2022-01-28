import AWS from "aws-sdk";

//AWS S3에 이미지 업로드하기
//차후에 Reducer 변경예정
export const getS3Auth = () => {
  AWS.config.update({
    region: process.env.REGION, // 그룹풀 리전
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.IDENTITYPOOLID, // 리전 인증풀
    }),
  });
};

export const uploadToS3 = (file, target) => {
  //파일업로드 취소 시
  if (file === undefined) {
    console.log(e.target.files[0]);
    return;
  }

  //파일 저장
  const type = file.type;
  const fileExtension = "." + type.slice(type.indexOf("/") + 1);

  //root계정으로 S3에 파일 업로드하기
  // 파일이름과 확장자가 동일하면 S3에서 덮어쓰기 되기 때문에 ID구별 필요
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.BUCKETNAME,
      Key: "사용자" + target + fileExtension,
      Body: file,
      ContentType: type,
    },
  });

  const promise = upload.promise();

  return promise;
};
