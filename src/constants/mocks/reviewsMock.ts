import { IReview } from '../types/reviews.d';
import { mockMyProfile, mockOtherProfile } from './profileMock';

export const reviewMock: IReview = {
  id: 1221,
  created_at: new Date().toISOString(),
  text: 'Спасибо фотографу за проявленный профессионализм и итоговое качество работы',
  rating: 5,
  user: mockOtherProfile,
  reviewer: mockMyProfile,
};

export const mockReviews: IReview[] = [
  reviewMock,
  { ...reviewMock, rating: 4 },
  { ...reviewMock, rating: 4 },
  reviewMock,
];
