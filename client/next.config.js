module.exports = {
  reactStrictMode: true,
  env: {
    IDENTITYPOOLID: process.env.IDENTITYPOOLID,
    BUCKETNAME: process.env.BUCKETNAME,
    REGION: process.env.REGION,
  },
  images: {
    domains: [
      "farm-online-process.s3.amazonaws.com",
      "farm-online-process.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};
