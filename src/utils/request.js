import { getSession, signOut } from 'next-auth/client';
import { SnackbarProvider, useSnackbar } from 'notistack';

export async function request(
  url,
  method = 'GET',
  body = {},
  headers = {},
  callback
) {
  const session = await getSession();

  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      credentials: 'same-origin',
      cache: 'no-store',
    };
    if (session && session?.user?.token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${session?.user?.token}` || '',
      };
    }

    if (method === 'POST' || method === 'PUT') {
      Object.assign(options, { body: JSON.stringify(body) });
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API + url, options);
    const data = await response.json();
    if (response.status === 403) {
      try {
        alert('You not have permission. You was loged out', {
          variant: 'error',
        });
        signOut({ callbackUrl: window.location.origin });
      } catch (e) {
        console.log(e);
      }
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
