import axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllTeams = () => {
  return request('/team/get-all', 'GET');
};

export const createTeam = async (body) => {
  //   return request('/award', 'POST', body, {
  //     'Content-Type': 'multipart/form-data',
  //   });
  const session = await getSession();
  return axios.post(process.env.NEXT_PUBLIC_API + '/team', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.user?.accessToken}` || '',
    },
  });
};

export const updateTeam = (body) => {
  return request('/team', 'PUT', body);
};
