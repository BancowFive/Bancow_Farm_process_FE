import { request } from ".";

export const submit = {
  submitFiles(fileInfo, id) {
    return request("put", `/api/farm/${id}/files`, { fileInfo });
  },

  moveStep(pageNum, inProgress, id) {
    return request("put", `/api/farm/${id}/in-progress`, {
      pageNum,
      inProgress,
    });
  },
};
