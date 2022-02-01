import { request } from ".";

export const auth = {
  getCertification(phoneNumber) {
    return request("post", "/api/sendSMS", { phoneNumber });
  },
  authorize(phoneNumber, password) {
    return request("post", "/login", { phoneNumber, password });
  },
};
