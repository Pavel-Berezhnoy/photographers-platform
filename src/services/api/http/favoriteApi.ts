import { AxiosResponse } from 'axios';
import { http } from '.';
import { IFavoriteOrderResponse, IFavoriteProfileResponse } from '../../../constants/types/favorite.d';

export function getFavoriteOrders(): Promise<AxiosResponse<IFavoriteOrderResponse[]>> {
  return http.get('/favorite/orders');
}

export function getFavoriteProfiles(): Promise<AxiosResponse<IFavoriteProfileResponse[]>> {
  return http.get('/favorite/profiles');
}

export function addOrderToFavorite(targetOrderId: number) {
  return http.post('/favorite/orders', { target_id: targetOrderId });
}

export function addProfileToFavorite(targetProfileId: number) {
  return http.post('/favorite/profiles', { target_id: targetProfileId });
}

export function removeOrderFromFavorite(targetOrderId: number) {
  return http.delete(`/favorite/orders/${targetOrderId}`);
}

export function removeProfileFromFavorite(targetProfileId: number) {
  return http.delete(`/favorite/profiles/${targetProfileId}`);
}
