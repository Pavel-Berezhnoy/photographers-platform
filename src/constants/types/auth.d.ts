import { AccountType } from './profile.d';

export interface LoginPayload {
  email: string,
  password: string
}

export interface RegisterPayload {
  email: string,
  password: string,
  name: string,
  surname: string,
  accountType: AccountType,
}

export interface AuthResponse {
  accessToken: string,
  refreshToken: string,
}
