import axios from 'axios';
import { getToken } from '../../../utils';

const http = axios.create({
  baseURL: 'http://10.204.133.248:19000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = await getToken();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use((response) => {
  return response;
});

export { http };
