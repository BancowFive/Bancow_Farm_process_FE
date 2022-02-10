import { request } from "./index";

export const uploadPicture = {
  saveFarmPicture(data, id) {
    const { originalImageName, changedImageName, imageUrl, imageType } = data;
    console.log("api 호출");
    return request("put", `/api/farm/${id}/images`, {
      originalImageName,
      changedImageName,
      imageUrl,
      imageType,
    });
  },
};
