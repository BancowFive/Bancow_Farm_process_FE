import { request } from ".";

export const auth = {
  getCertification(data) {
    return request("post", "/api/sendSMS", data);
  },
  authorize(data) {
    return request("post", "/login", data);
  },
  fetchData(id) {
    return request("get", `/api/farm/checkInfo/${id}`);
  },
};
