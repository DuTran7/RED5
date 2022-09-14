import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getChapters = () => {
  return request(API.DETAIL_CATEGORY.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.DETAIL_CATEGORY.BY_ID + id, 'GET');
};

export const createDetailCategory = (body) => {
  return request('/detail-category', 'POST', body);
};
export const updateDetailCategory = (body) => {
  return request('/detail-category', 'PUT', body);
};
