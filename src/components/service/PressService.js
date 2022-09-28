import axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export const getAllPress = () => {
  return request('/press/get-all', 'GET');
};

export const createPress = async (body) => {
  const session = await getSession();
  return axios.post(process.env.NEXT_PUBLIC_API + '/press', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.user?.token}` || '',
    },
  });
};

export const updatePress = (body) => {
  return request('/press', 'PUT', body);
};
