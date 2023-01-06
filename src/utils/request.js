import { getSession, signOut } from 'next-auth/client';
import { SnackbarProvider, useSnackbar } from 'notistack';

export async function request(
  url,
  method = 'GET',
  body = {},
  headers = {},
  callback
) {
  let session = null;

  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        ...headers,
      },
      credentials: 'same-origin',
      cache: 'no-store',
    };

    if (method === 'POST' || method === 'PUT') {
      session = await getSession();
      if (session && session?.user?.accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${session?.user?.accessToken}` || '',
        };
      }
      Object.assign(options, { body: JSON.stringify(body) });
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API + url, options);
    const data = await response.json();
    if (response.status === 403) {
    }

    return data;
  } catch (err) {
    if (typeof callback === 'function') {
      callback(err?.message);
    }
    return err;
  } finally {
    if (typeof callback === 'function') {
      callback(null);
    }
  }
}
