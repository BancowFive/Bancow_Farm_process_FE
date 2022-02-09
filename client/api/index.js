import axios from "axios";
import authHeader from "../utils/authHeader";
export const DOMAIN = "http://15.164.228.240:8080";

export const request = async (method, url, data) => {
  let json = JSON.stringify(data);
  try {
    const result = await axios({
      method,
      url: DOMAIN + url,
      headers: {
        ...authHeader(),
        "Content-Type": "application/json",
      },
      data: json,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error.response;
  }
};

//단순 페이지 이동하기
export const movePage = (pageNum, id) => {
  return request("put", `/api/farm/${id}/move`, {
    pageNum: pageNum,
  });
};

//농장 상태 변경
export const moveStep = (pageNum, inProgress, id) => {
  return request("put", `/api/farm/${id}/inProgress`, {
    pageNum: pageNum,
    inProgress: inProgress,
  });
};

// 단계 확인하기
export const checkInProgress = phoneNumber => {
  return request("get", `/api/farm/checkInProgress/${phoneNumber}`);
};

// 단계에 맞는 데이터 fetch하기
export const fetchData = step => {
  return request("get", `/api/farm/checkStep${step}`);
};

export { auth } from "./auth";
export { terms } from "./terms";
export { farmInfo, personalInfo } from "./info";
export { submit } from "./submit";
export { schedule } from "./schedule";
