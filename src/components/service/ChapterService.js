import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getChapters = () => {
  return request(API.CATEGORY.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.CATEGORY.BY_ID + id, 'GET');
};
