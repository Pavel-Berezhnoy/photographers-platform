import { AxiosResponse } from 'axios';
import { http } from '.';
import { LoginPayload, AuthResponse, RegisterPayload } from '../../../constants/types/auth.d';
import { getRefreshToken } from '../../token-service';
import { IProfile } from '../../../constants/types/profile.d';

export async function register({
  name, surname, email, password, accountType,
}: RegisterPayload): Promise<AxiosResponse<AuthResponse>> {
  return http.post('/signup', {
    name, sur_name: surname, email, password, user_type: accountType,
  });
}

export function login({ email, password }: LoginPayload): Promise<AxiosResponse<AuthResponse>> {
  return http.post('/login', { email, password });
}

export function checkTokenAndFetchUser(): Promise<AxiosResponse<IProfile>> {
  return http.get('/validate');
}

export function refreshUserTokens(): Promise<AxiosResponse<AuthResponse>> {
  const refreshToken = getRefreshToken();
  return http.post('/refresh', { token: refreshToken });
}
