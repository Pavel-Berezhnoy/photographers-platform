import { makeAutoObservable } from 'mobx';
import {
  addOrderToFavorite,
  addProfileToFavorite,
  getFavoriteOrders,
  getFavoriteProfiles,
  removeOrderFromFavorite,
  removeProfileFromFavorite,
} from '../../../services/api/http/favoriteApi';
import {
  IFavoriteOrder, IFavoriteOrderResponse, IFavoriteProfile, IFavoriteProfileResponse,
} from '../../../constants/types/favorite.d';
import { favoriteOrderToView, favoriteProfileToView } from '../../../services/serializers/favoriteSerialize';

interface IFavoriteStore {
  favoriteUsers: IFavoriteProfileResponse[],
  favoriteOrders: IFavoriteOrderResponse[],
  favoriteLoading: boolean,

  get getFavoriteUsers(): IFavoriteProfile[],
  get getFavoriteOrders(): IFavoriteOrder[],
  get getFavoriteLoading(): boolean,

  set setFavoriteUsers(payload: IFavoriteProfileResponse[]),
  set setFavoriteOrders(payload: IFavoriteOrderResponse[]),
  set setFavoriteLoading(val: boolean),

  fetchFavoriteOrders(): Promise<void>,
  fetchFavoriteUsers(): Promise<void>,
  updateFavoriteOrders(orderId: number): Promise<void>,
  updateFavoriteUsers(userId: number): Promise<void>,
  deleteFavoriteOrder(orderId: number): Promise<void>,
  deleteFavoriteUser(userId: number): Promise<void>,
}

export const favoriteStore = makeAutoObservable<IFavoriteStore>({
  favoriteUsers: [],
  favoriteOrders: [],
  favoriteLoading: false,

  get getFavoriteUsers() {
    return this.favoriteUsers
      .map((favoriteUser: IFavoriteProfileResponse) => favoriteProfileToView(favoriteUser));
  },
  get getFavoriteOrders() {
    return this.favoriteOrders
      .map((favoriteOrder: IFavoriteOrderResponse) => favoriteOrderToView(favoriteOrder));
  },
  get getFavoriteLoading() {
    return this.favoriteLoading;
  },

  set setFavoriteUsers(payload: IFavoriteProfileResponse[]) {
    this.favoriteUsers = payload;
  },
  set setFavoriteOrders(payload: IFavoriteOrderResponse[]) {
    this.favoriteOrders = payload;
  },
  set setFavoriteLoading(val: boolean) {
    this.favoriteLoading = val;
  },

  async fetchFavoriteOrders() {
    favoriteStore.setFavoriteLoading = true;
    const favoriteOrdersResponse = await getFavoriteOrders();
    if (favoriteOrdersResponse.status === 200) {
      favoriteStore.setFavoriteOrders = favoriteOrdersResponse.data;
    }
    favoriteStore.setFavoriteLoading = false;
  },
  async fetchFavoriteUsers() {
    favoriteStore.setFavoriteLoading = true;
    const favoriteProfileResponse = await getFavoriteProfiles();
    if (favoriteProfileResponse.status === 200) {
      favoriteStore.setFavoriteUsers = favoriteProfileResponse.data;
    }
    favoriteStore.setFavoriteLoading = false;
  },
  async updateFavoriteOrders(orderId: number) {
    const updateFavoriteOrderResponse = await addOrderToFavorite(orderId);
    if (updateFavoriteOrderResponse.status === 200) favoriteStore.fetchFavoriteOrders();
  },
  async updateFavoriteUsers(userId: number) {
    const updateFavoriteProfileResponse = await addProfileToFavorite(userId);
    if (updateFavoriteProfileResponse.status === 200) favoriteStore.fetchFavoriteUsers();
  },
  async deleteFavoriteOrder(orderId: number) {
    const removeFavoriteOrderResponse = await removeOrderFromFavorite(orderId);
    if (removeFavoriteOrderResponse.status === 200) favoriteStore.fetchFavoriteOrders();
  },
  async deleteFavoriteUser(userId: number) {
    const removeFavoriteProfileResponse = await removeProfileFromFavorite(userId);
    if (removeFavoriteProfileResponse.status === 200) favoriteStore.fetchFavoriteUsers();
  },
});
