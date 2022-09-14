import axios from 'axios';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllCategories = () => {
  return request(API.CATEGORY.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.CATEGORY.BY_ID + id, 'GET');
};

export const createCategory = (body) => {
  return axios.post(process.env.NEXT_PUBLIC_API + '/category', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateCategory = (body) => {
  return request('/category', 'PUT', body);
};
