import axios from 'axios';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllPress = () => {
  return request('/press/get-all', 'GET');
};

export const createPress = (body) => {
  return axios.post(process.env.NEXT_PUBLIC_API + '/press', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updatePress = (body) => {
  return request('/press', 'PUT', body);
};
