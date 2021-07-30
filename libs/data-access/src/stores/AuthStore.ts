import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { RootStore } from './RootStore';
import jwt from 'jsonwebtoken';
import { UserDto } from '@portfolio/shared-types';
import { http } from '../api/ApiClient';
import { Auth, login, logout } from '../api/auth.service';
export class AuthStore {
  root: RootStore;
  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      accessToken: observable,
      setAccessToken: action,
      removeAccessToken: action,
      getCurrentUser: action,
      login: action,
      signup: action,
      logout: action,
      isLoggedIn: action,
      getAccessToken: action,
      checkExpiry: action,
      AccessTokenInternal: computed,
      _refreshToken: action,
      isTokenExpired: action,
    });
  }
  accessToken: string | null = null;
  refreshToken: string | null = null;
  currentUser: UserDto | null = null;

  get AccessTokenInternal() {
    return localStorage.getItem('accessToken');
  }
  setAccessToken = (value: string) => {
    this.accessToken = value;
    localStorage.setItem('accessToken', value);
  };
  getAccessToken = async () => {
    await this.checkExpiry();
    return this.AccessTokenInternal;
  };
  removeAccessToken = () => {
    this.accessToken = null;
    localStorage.removeItem('accessToken');
  };
  getCurrentUser = async () => {
    const data: UserDto = await this.getCurrentUser();
    this.currentUser = data;
    return this.currentUser;
  };
  _refreshToken = async () => {
    return await http.post('/auth/refresh-token');
  };
  isTokenExpired = (token: string) => {
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
  };
  checkExpiry = async () => {
    const token = this.AccessTokenInternal;
    if (token && this.isTokenExpired(token)) {
      try {
        await this._refreshToken();
      } catch (e) {
        this.removeAccessToken();
      }
    }
  };
  login = async (creds: Auth) => {
    const data: any = await login(creds);
    if (data) {
      const { accessToken, refreshToken } = data;
      this.setAccessToken(accessToken);
      this.refreshToken = refreshToken;
    } else {
      this.removeAccessToken();
    }
  };
  signup() {}
  logout = async () => {
    await logout();
    this.removeAccessToken();
    this.refreshToken = null;
  };
  isLoggedIn = async () => {
    try {
      const token = await this.getAccessToken();
      return token && !this.isTokenExpired(token);
    } catch (e) {
      return false;
    }
  };
}
