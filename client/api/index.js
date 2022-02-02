import axios from "axios";

const DOMAIN = "http://15.164.228.240:8080";

export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then(result => result.data)
    .catch(error => {
      console.error(error);
      throw error.response;
    });
};

export const user = {
  fetchData() {
    return request("get", "/api/farm/checkInfo/:id");
  },
};

//단순 페이지 이동하기
export const movePage = (pageNum, id) => {
  return request("put", `/api/farm/${id}/in-progress`, {
    pageNum: pageNum,
  });
},

//농장 상태 변경
export const moveStep = (pageNum, inProgress, id) => {
  return request("put", `/api/farm/${id}/in-progress`, {
    pageNum: pageNum,
    inProgress: inProgress,
  });
},

export { auth } from "./auth";
export { terms } from "./terms";
export { farmInfo, personalInfo } from "./info";
export { submit } from "./submit";
export { schedule } from "./schedule";
