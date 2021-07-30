import { UserDto } from '@portfolio/shared-types';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as authService from '../api/auth.service';
import * as jwt from 'jsonwebtoken';

interface AuthContextType {
  user?: UserDto;
  loading: boolean;
  error?: any;
  useUser: () => void;
  login: (email: string, password: string) => void;
  signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<UserDto>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  // We are using `react-router` for this example,
  // but feel free to omit this or use the
  // router of your choice.

  // If we change page, reset the error state.
  //   useEffect(() => {
  //     if (error) setError(null);
  //   }, [location.pathname]);

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.

  function getFreshToken() {
    checkExpiry();
    return localStorage.getItem('accessToken');
  }
  function isTokenExpired(token: string) {
    var isExpired = false;
    if (token != null) {
      var decodedToken = jwt.decode(token, { complete: true });
      var dateNow = new Date().getTime() / 1000;
      if (decodedToken != null) {
        if (decodedToken.payload.exp && decodedToken.payload.exp < dateNow)
          isExpired = true;
      }
    }
    return isExpired;
  }
  function checkExpiry() {
    const token = localStorage.getItem('accessToken');
    if (token && isTokenExpired(token)) {
      authService
        .refreshToken()
        .then(({ data }) => {
          localStorage.setItem('accessToken', data.accessToken);
        })
        .catch(() => localStorage.removeItem('accessToken'));
    }
  }
  useEffect(() => {
    const token = getFreshToken();
    console.log(token);
    authService.getCurrentUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  function login(email: string, password: string) {
    setLoading(true);
    authService.login({ email, password }).then(({ data }) => {
      setUser(data.user);
      localStorage.setItem('accessToken', data.accessToken);
      setLoading(false);
    }); 
  }

  // Sends sign up details to the server. On success we just apply
  // the created user to the state.
  function signUp(email: string, name: string, password: string) {
    setLoading(true);
    authService
      .register({ email, password })
      .then((user) => {
        setUser(user);
        // history.push('/');
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  // Call the logout endpoint and then remove the user
  // from the state.
  function logout() {
    localStorage.removeItem('accessToken');
    authService.logout().then(() => setUser(undefined));
  }
  function useUser() {
    (async () => {
      const { data, error } = await authService.getCurrentUser();
      setUser(data.user);
      return data.user;
    })();
  }
  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      useUser,
      login,
      signUp,
      logout,
    }),
    [user, loading, error]
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}
