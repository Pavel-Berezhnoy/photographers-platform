import { AxiosResponse } from 'axios';
import { http } from '.';
import { IReview, IReviewPayload } from '../../../constants/types/reviews.d';

export function getReviewsByUserId(userId: number): Promise<AxiosResponse<IReview[]>> {
  return http.get(`/reviews/user/${userId}`);
}

export function createReview(payload: IReviewPayload): Promise<AxiosResponse> {
  return http.post('/reviews', payload);
}
