import { request, axiosAuth, DOMAIN } from ".";

export const auth = {
  getCertification(data) {
    return request("post", "/api/sendSMS", data);
  },
  authorize(data) {
    const result = axiosAuth("post", "/login", data);
    return result;
  },
  fetchData(id) {
    return request("get", `/api/farm/checkInfo/${id}`);
  },
  logout() {
    localStorage.removeItem("token");
  },
};
