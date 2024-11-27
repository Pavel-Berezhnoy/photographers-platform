import { IOrder } from './order.d';
import { IProfile, IProfileToView } from './profile.d';

export interface IFavoriteOrderResponse {
  id: number,
  created_at: string,
  updated_at: string,
  order: IOrder,
  user: IProfile
}

export interface IFavoriteProfileResponse {
  id: number,
  created_at: string,
  updated_at: string,
  target: IProfile,
  user: IProfile
}

export interface IFavoriteOrder {
  id: number,
  created_at: string,
  updated_at: string,
  order: IOrder,
  user: IProfileToView
}

export interface IFavoriteProfile {
  id: number,
  created_at: string,
  updated_at: string,
  target: IProfileToView,
  user: IProfileToView
}
