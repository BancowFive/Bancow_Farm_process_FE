import { request } from "../index";

export const farmInfo = {
  saveFarmInfo(data, pageNum) {
    const { farmName, farmPostCode, farmAddress, fodder } = data;
    return request("put", "/api/farm/:id/info", {
      farmName,
      farmAddress,
      farmPostCode,
      fodder,
      pageNum,
    });
  },
};
