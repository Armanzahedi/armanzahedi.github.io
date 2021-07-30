import { UserDto } from '@portfolio/shared-types';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as jwt from 'jsonwebtoken';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Loading from '../components/layout/Loading';
import LoginForm from '../components/forms/LoginForm';
import Login from '../pages/login';
export function AuthGuard({ children }: { children: ReactNode }): JSX.Element {
  const [session, loading] = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   console.log(session, loading);
  //   if (!loading && !session) {
  //     console.log('1');
  //     if (!session) {
  //       console.log('2');
  //       if (router.pathname !== '/login') {
  //         console.log('reached');
  //       }
  //     }
  //   }
  // }, [loading]);
  if (loading) {
    return <Loading />;
  }
  if (!session) {
    return <Login />;
  }
  return <>{children}</>;
}
