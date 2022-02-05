import AWS from "aws-sdk";

//AWS S3에 이미지 업로드하기
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
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.BUCKETNAME,
      //사용자 구분값 localStorage에서 가져오기()
      Key: `사용자ID ${target} ${fileExtension}`,
      Body: file,
      ContentType: type,
    },
  });

  const promise = upload.promise();

  return promise;
};
