import { request } from ".";

export const schedule = {
  submitAvailableDate(date, id) {
    return request("put", `/api/farm/${id}/in-progress`, {
      investigationRequest: date,
    });
  },
};
