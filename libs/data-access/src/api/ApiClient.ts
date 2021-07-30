import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/client';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  UnprocessableEntity = 422,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  try {
    let token = null;
    const session = await getSession();
    if (session != null) {
      token = session.accessToken;
    }
    if (token != null) {
      const validToken = `Bearer ${token}`;
      config.headers.Authorization = `${validToken}`;
    }
    return config;
  } catch (error) {
    throw new Error(error);
  }
};

class ApiClient {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initApiClient();
  }

  initApiClient() {
    const http = axios.create({
      baseURL: 'http://localhost:3333/api',
      headers,
      withCredentials: true,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: any) {
    const { status } = error;
    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        console.log('InternalServerError');
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        console.log('Forbidden');
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        console.log('Unauthorized');
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        console.log('TooManyRequests');
        break;
      }
      case StatusCode.UnprocessableEntity: {
        // Handle TooManyRequests
        if (localStorage != undefined) {
          localStorage.removeItem('accessToken');
        }
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const http = new ApiClient();
