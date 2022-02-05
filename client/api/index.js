import axios from "axios";
import authHeader from "../utils/authHeader";
export const DOMAIN = "http://15.164.228.240:8080";

export const request = (method, url, data) => {
  let json = JSON.stringify(data);
  return axios({
    method,
    url: DOMAIN + url,
    headers: authHeader(),
    data: json,
  })
    .then(result => result)
    .catch(error => {
      console.error(error);
      throw error.response;
    });
};

//단순 페이지 이동하기
export const movePage = (pageNum, id) => {
  return request("put", `/api/farm/${id}/move`, {
    pageNum: pageNum,
  });
};

//농장 상태 변경
export const moveStep = (pageNum, inProgress, id) => {
  return request("put", `/api/farm/${id}/in-progress`, {
    pageNum: pageNum,
    inProgress: inProgress,
  });
};

export { auth } from "./auth";
export { terms } from "./terms";
export { farmInfo, personalInfo } from "./info";
export { submit } from "./submit";
export { schedule } from "./schedule";
