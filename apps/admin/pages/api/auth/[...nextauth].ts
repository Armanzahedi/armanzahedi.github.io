import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';

import { NextApiHandler } from 'next';
import prisma from '../../../lib/prisma';
import { authService } from '@portfolio/data-access';
import * as argon2 from 'argon2';

let userAccount = null;
const options = {
  providers: [
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // Providers.Email({
    //   server: {
    //     host: process.env.SMTP_HOST,
    //     port: Number(process.env.SMTP_PORT),
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.SMTP_FROM,
    // }),
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        // Here call your API with data passed in the login form
        const user = await authService.login(credentials);

        if (user) {
          return user;
        } else {
          return null;
        }
        // const user = await prisma.user.findFirst({
        //   where: {
        //     email: credentials.email,
        //   },
        // });
        // if (user !== null) {
        //   const isPasswordValid = await argon2.verify(
        //     user.password,
        //     credentials.password
        //   );
        //   if (isPasswordValid) {
        //     userAccount = user;
        //     return user;
        //   } else {
        //     return null;
        //   }
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  callbacks: {
    async jwt(prevToken, token) {
      console.log('prevToken', prevToken);
      console.log('token', token);
      // Initial call
      if (token) {
        return {
          accessToken: token.accessToken,
          user: token.user,
          refreshToken: token.refreshToken,
          // Assuming you can get the expired time from the API you are using
          // If not you can set this value manually
          expiresIn: Date.now() + token.expiresIn * 1000,
        };
      }

      // Subsequent calls
      // Check if the expired time set has passed
      if (Date.now() < prevToken.expiresIn) {
        // Return previous token if still valid
        return prevToken;
      }

      // Refresh the token in case time has passed
      return refreshAccessToken(prevToken.refreshToken);
    },
    async session(session, token) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user = token.user;
        session.expiresIn = token.expiresIn;
        return session;
      } else {
        Promise.reject('/login');
      }
    },
  },
  // callbacks: {
  //   async signIn(user, account, profile) {
  //     if (typeof user.id !== typeof undefined) {
  //       return user;
  //       // if (user.isActive === '1') {
  //       //   return user;
  //       // } else {
  //       //   return false;
  //       // }
  //     } else {
  //       return false;
  //     }
  //   },
  //   async session(session, token) {
  //     if (userAccount !== null) {
  //       session.user = userAccount;
  //     } else if (
  //       typeof token.user !== typeof undefined &&
  //       (typeof session.user === typeof undefined ||
  //         (typeof session.user !== typeof undefined &&
  //           typeof session.user.id === typeof undefined))
  //     ) {
  //       session.user = token.user;
  //     } else if (typeof token !== typeof undefined) {
  //       session.token = token;
  //     }
  //     return session;
  //   },
  //   async jwt(token, user, account, profile, isNewUser) {
  //     console.log('jwt');
  //     if (typeof user !== typeof undefined) {
  //       token.user = user;
  //     }
  //     return token;
  //   },
  // },
  // @ts-ignore
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
  pages: {
    signIn: '/login',
  },
  session: { jwt: true },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
const refreshAccessToken = async (refreshToken) => {
  //   const token = await authService.refreshToken();
  const token = await authService.refreshToken(refreshToken);

  // Do what you want
  return {
    user: token.user,
    accessToken: token.accessToken,
    expiresIn: Date.now() + token.expiresIn * 1000,
  };
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
