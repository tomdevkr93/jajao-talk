import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

instance.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
});

export default instance;
