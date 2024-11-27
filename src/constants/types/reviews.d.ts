import { IProfile } from './profile.d';

export interface IReview {
  id: number,
  user: IProfile,
  reviewer: IProfile
  rating: number,
  text: string,
  created_at: string,
}

export interface IReviewPayload {
  user_id: number,
  reviewer_id: number,
  text: string,
  rating: number,
}
