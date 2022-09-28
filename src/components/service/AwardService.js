import axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import { API } from 'utils/constants';
import { request } from 'utils/request';
export const getAllAwards = () => {
  return request(API.AWARD.ALL, 'GET');
};

export const getChapterDetail = (id) => {
  return request(API.AWARD.BY_ID + id, 'GET');
};

export async function uploadFile(body) {
  const session = await getSession();
  console.log(session);
  return await axios.post(process.env.NEXT_PUBLIC_API + '/file/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.user?.token}` || '',
    },
  });
}
export async function updateFile(body) {
  const session = await getSession();
  return await axios.put(process.env.NEXT_PUBLIC_API + '/file/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.user?.token}` || '',
    },
  });
}

export const createAward = async (body) => {
  const session = await getSession();
  return await axios.post(process.env.NEXT_PUBLIC_API + '/award', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.user?.token}` || '',
    },
  });
};

export const updateAward = (body) => {
  return request('/award', 'PUT', body);
};
