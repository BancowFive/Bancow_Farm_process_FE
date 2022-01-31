import { request } from ".";

export const terms = {
  saveServiceTerms(serviceTerms, pageNum) {
    const { conditionOfUse, trustOfInformation, collectionOfInformation } =
      serviceTerms;
    return request("put", "api/farm/{id}/agreement", {
      serviceTerms1: conditionOfUse,
      serviceTerms2: trustOfInformation,
      serviceTerms3: collectionOfInformation,
      pageNum,
    });
  },
};
