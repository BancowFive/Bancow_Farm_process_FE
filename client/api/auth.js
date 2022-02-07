import { request, DOMAIN } from ".";
import axios from "axios";

export const auth = {
  getCertification(data) {
    return axiosCertification("post", "/api/sendSMS", data);
  },
  authorize(data) {
    const result = axiosAuth("post", "/login", data);
    return result;
  },
  fetchData(id) {
    return request("get", `/api/farm/checkInfo/${id}`);
  },
  logout() {
    localStorage.removeItem("token");
  },
};

export const axiosAuth = (method, url, data) => {
  let json = JSON.stringify(data);
  return axios({
    method,
    url: DOMAIN + url,
    data: json,
  })
    .then(response => {
      console.log(response);
      if (response.headers.authorization) {
        localStorage.setItem("token", response.headers.authorization);
      }
      return response.headers;
    })
    .catch(error => {
      console.error(error);
      throw error.response;
    });
};

export const axiosCertification = (method, url, data) => {
  const formBody = Object.keys(data)[0] + "=" + data["phoneNumber"];
  return axios({
    method,
    url: DOMAIN + url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: formBody,
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error(error);
      throw error.response;
    });
};
