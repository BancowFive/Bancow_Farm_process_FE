import { request } from ".";

export const schedule = {
  submitAvailableDate(date, id) {
    return request("put", `/api/farm/${id}/requestDate`, {
      investigationRequest: date,
      //pageNume 삭제예정(BE/추후 수정)
      pageNum: "14",
    });
  },
};
