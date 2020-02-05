/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { axiosInstance } from '../../axios';
import { API_LOGIN } from '../../constants/api';

export async function login(data) {
  return await axiosInstance
    .post(API_LOGIN, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error && error.response);
    });
}
