import { request } from "../../index";

export const farmCheck = {
  saveFarmCheck(data, pageNum, id) {
    const { identification, ownFarm, breedingType, population, cctv } = data;
    console.log("api 호출");
    return request("put", `/api/farm/${id}/infoCheck`, {
      identification,
      ownFarm,
      breedingType,
      population,
      cctv,
      pageNum,
    });
  },
};
