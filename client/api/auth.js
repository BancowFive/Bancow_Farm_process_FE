import { request } from ".";

export const auth = {
  getCertification(telNumber) {
    return request("post", "api/sendSMS", { telNumber });
  },
  authorize(telNumber, password) {
    return request("post", "api/login", { telNumber, password });
  },
};
