import axios from 'axios';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllAwards = () => {
  return request(API.AWARD.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.AWARD.BY_ID + id, 'GET');
};

export const uploadFile = (body) => {
  //   return request('/file/upload', 'POST', body, {
  //     'Content-Type': 'multipart/form-data',
  //   });
  return axios.post(process.env.NEXT_PUBLIC_API + '/file/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const updateFile = (body) => {
  //   return request('/file/upload', 'POST', body, {
  //     'Content-Type': 'multipart/form-data',
  //   });
  return axios.put(process.env.NEXT_PUBLIC_API + '/file/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const createAward = (body) => {
  //   return request('/award', 'POST', body, {
  //     'Content-Type': 'multipart/form-data',
  //   });
  return axios.post(process.env.NEXT_PUBLIC_API + '/award', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateAward = (body) => {
  return request('/award', 'PUT', body);
};
