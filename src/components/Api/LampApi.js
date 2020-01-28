/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { axiosInstance } from '../../axios';
import { API_LAMP } from '../../constants/api';

export async function getLampList() {
  return await axiosInstance
    .get(API_LAMP)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function getLampDetails(id) {
  return await axiosInstance
    .get(`${API_LAMP}/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
