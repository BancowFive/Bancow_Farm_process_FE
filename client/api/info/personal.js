import { request } from "../index";

export const personalInfo = {
  savePersonalInfo(data, pageNum) {
    const { name, email } = data;
    return request("put", "/api/farm/:id/owner-info", { name, email, pageNum });
  },
};
