import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllAwards = () => {
  return request(API.AWARD.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.AWARD.BY_ID + id, 'GET');
};

export const uploadFile = (body) => {
  return request('/file/upload', 'POST', body, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

export const createAward = (body) => {
  return request('/award', 'POST', body, {
    Accept: 'application/form-data',
  });
};
