import axios, { AxiosError } from 'axios';
import {
  getAccessToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken,
} from '../../token-service';
import { refreshUserTokens } from './authApi';

export const http = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}/api/v1`,
});

http.interceptors.request.use((config) => {
  const accToken = getAccessToken();
  if (accToken) {
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${accToken}`;
    return newConfig;
  }
  return config;
});

http.interceptors.response.use((response) => response, async (error: AxiosError) => {
  if (error.response?.status === 401 && error.config?.url !== '/refresh') {
    const refreshResponse = await refreshUserTokens();
    if (refreshResponse.status === 200) {
      setAccessToken(refreshResponse.data.accessToken);
      setRefreshToken(refreshResponse.data.refreshToken);
      if (error.config) {
        const repeatResponse = await http(error.config);
        return repeatResponse;
      }
    } else if (refreshResponse.status === 401) {
      removeAccessToken();
      removeRefreshToken();
    }
  }
  return error;
});
