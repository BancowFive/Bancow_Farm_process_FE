import { DOMAIN } from ".";
import axios from "axios";

const axiosAuth = async (method, url, data) => {
  let json = JSON.stringify(data);
  try {
    const response = await axios({
      method,
      url: DOMAIN + url,
      data: json,
    });
    console.log(response);
    if (response.headers.authorization) {
      localStorage.setItem("token", response.headers.authorization);
    }
    return response.headers;
  } catch (error) {
    console.error(error);
    throw error.response;
  }
};

const axiosCertification = async (method, url, data) => {
  const formBody = Object.keys(data)[0] + "=" + data["phoneNumber"];
  try {
    const response = await axios({
      method,
      url: DOMAIN + url,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: formBody,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response;
  }
};

export const auth = {
  getCertification(data) {
    const result = axiosCertification("post", "/api/sendSMS", data);
    return result;
  },
  authorize(data) {
    const result = axiosAuth("post", "/login", data);
    return result;
  },
  logout() {
    localStorage.removeItem("token");
  },
};
