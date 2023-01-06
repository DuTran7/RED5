import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { API, EXPIRED_TOKEN, PROVIDER_SIGNIN } from 'utils/constants';
import { request } from 'utils/request';
import moment from 'moment';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: PROVIDER_SIGNIN.CREDENTIAL,
      credentials: {
        email: {
          label: 'Username',
          type: 'email',
          placeholder: 'Input email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Input password',
        },
      },
      async authorize(cre, req) {
        const { email, password, username } = cre;
        const fetchUser = await request(
          API.AUTH_PROFILE,
          'POST',
          {
            email: email,
            password: password,
            username: username,
          },
          {
            cookie: req.headers.cookie || '',
          }
        );
        const user = await fetchUser.data;
        if (fetchUser?.successCode === 'OK') {
          if (user) {
            return {
              ...user[0],
              user: {
                ...user[0],
              },
              expiredToken: new Date().setMinutes(
                new Date().getMinutes() + EXPIRED_TOKEN
              ),
              email: user[0]?.email,
              token: user[0]?.accessToken,
            };
          } else {
            throw new Error(fetchUser?.messageCode);
          }
        }
        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    jwt: true,
    maxAge: 840000,
  },
  callbacks: {
    async jwt(session, user, provider) {
      try {
        const isSignedIn = !!user;

        if (isSignedIn) {
          session.accessToken = user.accessToken;
          session.refreshToken = user.refreshToken;
          session.email = user.email;
          session.expiredToken = user.expiredToken;
          session.expiresIn = user.expiresIn;
        }

        const shouldRefreshTime = Date.now() >= session.expiredToken;

        if (shouldRefreshTime) {
          session = refreshAccessToken(session);
        }
        return Promise.resolve(session);
      } catch (e) {
        console.log(e);
        throw new Error(JSON.stringify(e));
      }
    },
    async session(session, user) {
      const result = {
        session: {
          ...session,
        },
        user: {
          ...user,
        },
      };
      // Send properties to the client, like an access_token from a provider.
      return Promise.resolve(result);
    },
  },
});

async function refreshAccessToken(tokenObj) {
  try {
    const tokenRes = await request(API.AUTH_REFRESH_TOKEN, 'POST', {
      refreshToken: tokenObj?.refreshToken,
    });
    const result = {
      ...tokenObj,
      accessToken: tokenRes?.data[0]?.accessToken,
      refreshToken: tokenRes?.data[0]?.refreshToken,
      expiredToken: new Date().setMinutes(
        new Date().getMinutes() + EXPIRED_TOKEN
      ),
    };

    return Promise.resolve(result);
  } catch (e) {
    return {
      ...tokenObj,
      error: 'Can not refresh token',
    };
  }
}
