import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { API, PROVIDER_SIGNIN } from 'utils/constants';
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
        const fetchUser = await request(API.AUTH_PROFILE, 'POST', {
          email: email,
          password: password,
          username: username,
        });
        const user = await fetchUser.data;
        if (fetchUser?.successCode === 'OK') {
          if (user) {
            return {
              ...user[0],
              user: {
                ...user[0]?.username,
                expiredToken: new Date().setMinutes(
                  new Date().getMinutes() + 5
                ),
              },
              expiredToken: new Date().setMinutes(new Date().getMinutes() + 5),
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
      const isSignedIn = !!user;
      if (isSignedIn && provider) {
        session.token = user.token;
        session.id = provider.id;
        session.provider = provider.type;
        session.user = user;
      }
      if (Date.now() > new Date(session?.user?.expiredToken)) {
        const { data } = await request(API.REFRESH_TOKEN, 'POST', {
          refreshToken: session?.user?.tokenDto?.refreshToken,
        });
        if (data) {
          session.token = data[0]?.accessToken;
          session.user.token = data[0]?.accessToken;
          (session.user.expiredToken = new Date().setMinutes(
            new Date().getMinutes() + 5
          )),
            (session.user.tokenDto.refreshToken = data[0]?.refreshToken);
        }
      }
      return Promise.resolve(session);
    },
    async session(session, user) {
      session.user = user.user;
      session.token = user.token;
      session.provider = user.provider;
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },
});
