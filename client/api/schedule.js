import { request } from ".";

export const schedule = {
  submitAvailableDate(date, pageNum, id) {
    console.log("페이지넘버", pageNum);
    return request("put", `/api/farm/${id}/requestDate`, {
      investigationRequest: date,
      pageNum,
    });
  },
};
