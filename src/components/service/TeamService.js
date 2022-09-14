import axios from 'axios';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllTeams = () => {
  return request('/team/get-all', 'GET');
};

export const createTeam = (body) => {
  //   return request('/award', 'POST', body, {
  //     'Content-Type': 'multipart/form-data',
  //   });
  return axios.post(process.env.NEXT_PUBLIC_API + '/team', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateTeam = (body) => {
  return request('/team', 'PUT', body);
};
