import { AxiosResponse } from 'axios';
import {
  IChangeProfilePayload, IProfile, IUploadAvatarPayload, IUploadedAvatar,
} from '../../../constants/types/profile.d';
import { http } from '.';
import { IPagination } from '../../../constants/types';
import { IUsersReponse } from '../../../constants/types/users.d';

export function fetchUsersWithModelType(
  { limit = 10, page = 1 }: IPagination,
): Promise<AxiosResponse<IUsersReponse>> {
  return http.get(`/models?page=${page}&limit=${limit}`);
}

export function fetchUsersWithPhotoType(
  { limit = 10, page = 1 }: IPagination,
): Promise<AxiosResponse<IUsersReponse>> {
  return http.get(`/photographers?page=${page}&limit=${limit}`);
}

export function uploadAvatar(
  payload: IUploadAvatarPayload,
): Promise<AxiosResponse<IUploadedAvatar>> {
  return http.postForm('/profile/upload-avatar', payload.data);
}

export function changeProfile(payload: IChangeProfilePayload): Promise<AxiosResponse<IProfile>> {
  return http.put('/profile', payload.data);
}

export function fetchProfileById(userId: number): Promise<AxiosResponse<IProfile>> {
  return http.get(`/profile/${userId}`);
}
