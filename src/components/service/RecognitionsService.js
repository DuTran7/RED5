import axios from 'axios';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllRecognitions = () => {
  return request('/recognition/get-all', 'GET');
};

export const createRecognition = (body) => {
  return request('/recognition', 'POST', body);
  return axios.post(process.env.NEXT_PUBLIC_API + '/press', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateRecognition = (body) => {
  return request('/recognition', 'PUT', body);
};
