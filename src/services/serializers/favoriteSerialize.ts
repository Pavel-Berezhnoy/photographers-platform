import {
  IFavoriteOrder, IFavoriteOrderResponse, IFavoriteProfile, IFavoriteProfileResponse,
} from '../../constants/types/favorite.d';
import { profileToView } from './profileSerialize';

export function favoriteProfileToView(profile: IFavoriteProfileResponse): IFavoriteProfile {
  return {
    ...profile,
    target: profileToView(profile.target),
    user: profileToView(profile.user),
  };
}

export function favoriteOrderToView(oprder: IFavoriteOrderResponse): IFavoriteOrder {
  return {
    ...oprder,
    user: profileToView(oprder.user),
  };
}
