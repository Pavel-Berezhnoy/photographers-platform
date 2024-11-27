import { AxiosResponse } from 'axios';
import { http } from '.';
import { IMediaResponse, LoadMediaPayload } from '../../../constants/types/media.d';
import { IPagination } from '../../../constants/types';

export function getPortfolioMedias(
  { limit = 10, page = 1 }: IPagination,
  userId?: number,
): Promise<AxiosResponse<IMediaResponse>> {
  return http.get(`/media/${userId}?limit=${limit}&page=${page}`);
}

export function uploadMedia(payload: LoadMediaPayload): Promise<AxiosResponse> {
  return http.post('/media', payload.data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function deleteMedia(mediaId: number): Promise<void> {
  return http.delete(`/media/${mediaId}`);
}
