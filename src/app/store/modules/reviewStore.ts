import { makeAutoObservable } from 'mobx';
import { IReview, IReviewPayload } from '../../../constants/types/reviews.d';
import { createReview, getReviewsByUserId } from '../../../services/api/http/reviewApi';

interface IReviewStore {
  reviews: IReview[],
  reviewsLoading: boolean,

  get getReviews(): IReview[],
  get getReviewsLoading(): boolean,

  set setReviews(payload: IReview[]),
  set setReviewsLoading(payload: boolean),

  fetchReviewsByUserId(userId: number): Promise<void>,
  createReviewToUser(payload: IReviewPayload): Promise<void>,
  clearReviews(): void,
}

export const reviewStore = makeAutoObservable<IReviewStore>({
  reviews: [],
  reviewsLoading: false,

  get getReviews() {
    return this.reviews;
  },
  get getReviewsLoading() {
    return this.reviewsLoading;
  },

  set setReviews(payload: IReview[]) {
    this.reviews = payload;
  },
  set setReviewsLoading(payload: boolean) {
    this.reviewsLoading = payload;
  },

  async fetchReviewsByUserId(userId: number) {
    reviewStore.setReviewsLoading = true;
    const reviewsResponse = await getReviewsByUserId(userId);
    if (reviewsResponse.status === 200) {
      reviewStore.setReviews = reviewsResponse.data;
    }
    reviewStore.setReviewsLoading = false;
  },
  async createReviewToUser(payload: IReviewPayload) {
    const reviewsResponse = await createReview(payload);
    if (reviewsResponse.status === 200) reviewStore.fetchReviewsByUserId(payload.user_id);
  },
  clearReviews() {
    reviewStore.setReviews = [];
  },
});
