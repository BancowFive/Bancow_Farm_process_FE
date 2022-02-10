import { request } from "../../index";

export const docsCheck = {
  saveDocsCheck(data, pageNum, id) {
    const {
      livestockFarmingBusinessRegistration,
      facilitiesStructure,
      annualFodderCostSpecification,
      annualInspectionReport,
      businessLicense,
    } = data;
    console.log("api 호출");
    return request("put", `/api/farm/${id}/filesCheck`, {
      livestockFarmingBusinessRegistration,
      facilitiesStructure,
      annualFodderCostSpecification,
      annualInspectionReport,
      businessLicense,
      pageNum,
    });
  },
};
