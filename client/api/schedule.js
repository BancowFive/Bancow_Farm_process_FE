import { request } from ".";

export const schedule = {
  submitAvailableDate(date, PageNum, id) {
    return request("put", `/api/farm/${id}/requestDate`, {
      investigationRequest: date,
      PageNum,
    });
  },
};
