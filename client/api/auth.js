import { request } from ".";

export const auth = {
  getCertification(telNumber) {
    return request("post", "api/sendSMS", { userName: telNumber });
  },
  authorize(telNumber, password) {
    return request("post", "api/login", { userName: telNumber, password });
  },
};
