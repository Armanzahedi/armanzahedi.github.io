import { http } from './ApiClient';

export type Auth = {
  email: string;
  password: string;
};

export const register = async (creds: Auth): Promise<any> => {
  const { data } = await http.post<Auth>('/auth/register', creds);
  return data;
};

export const login = async (creds: Auth): Promise<any> => {
  const { data } = await http.post<Auth>(`/auth/login`, creds);
  return data;
};
export const logout = async (): Promise<any> => {
  const { data } = await http.post<Auth>(`/auth/logout`);
  return data;
};
export const getCurrentUser = async (): Promise<any> => {
  const { data } = await http.get<Auth>('/auth/me');
  return data;
};
export const getAccessToken = async (email: string): Promise<any> => {
  try {
    const { data } = await http.post('/auth/generateToken', { email });
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const refreshToken = async (refreshToken: string): Promise<any> => {
  const { data } = await http.post<any>(`/auth/refresh-token`, {
    refreshToken,
  });
  return data;
};
