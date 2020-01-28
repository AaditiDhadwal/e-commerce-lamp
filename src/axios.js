import axios from 'axios';

// import { NON_AUTHORIZATION_APIS } from './constants/api';

const requestHandler = request => {
  // if (!NON_AUTHORIZATION_APIS.includes(request.url)) {
  //   const token = 'YOUR_TOKEN_HERE';
  //   request.headers.Authorization = `Bearer ${token}`;
  // }
  return request;
};

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

axiosInstance.interceptors.request.use(request => requestHandler(request));
