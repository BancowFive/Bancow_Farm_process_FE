import { request } from ".";

const id = "example";

export const submit = {
  submitFiles(fileInfo) {
    return request("put", `/api/farm/${id}/files`, { fileInfo });
  },

  moveStep(pageNum, inProgress) {
    return request("put", `/api/farm/${id}/in-progress`, {
      pageNum,
      inProgress,
    });
  },
};
