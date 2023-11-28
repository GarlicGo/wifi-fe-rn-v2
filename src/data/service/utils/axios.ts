import axios from "axios";
import { getToken } from "../../../utils";

const http = axios.create({
  baseURL: "http://10.204.133.248:19000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = await getToken();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((response) => {
  const requestURL = response.config.url;
  const requestMethod = response.config.method;
  const requestParams = response.config.params;
  const responseCode = response.status;
  const responseData = response.data;

  const logText = `\n[Request]: ${requestMethod} ${requestURL} ${JSON.stringify(
    requestParams
  )}\n[Response]: ${responseCode} ${JSON.stringify(responseData)}`;

  console.log(logText);

  return response;
});

export { http };
