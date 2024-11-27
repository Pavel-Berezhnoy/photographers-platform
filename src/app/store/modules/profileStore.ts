import { makeAutoObservable, runInAction } from 'mobx';
import { IProfile, IProfileToView } from '../../../constants/types/profile.d';
import { profileToView } from '../../../services/serializers/profileSerialize';
import { ICreateOrderPayload, IOrder } from '../../../constants/types/order.d';
import { createOrder, getProfileOrders } from '../../../services/api/http/orderApi';

export interface IProfileStore {
  currentProfile: IProfile | null,
  profileOrders: IOrder[],
  profileOrdersLoading: boolean,

  set setCurrentProfile(profile: IProfile | null),
  set setProfileOrders(payload: IOrder[])
  set setProfileOrdersLoading(payload: boolean)

  get getProfileOrders(): IOrder[],
  get getCurrentProfile(): IProfile | null,
  get getCurrentProfileToView(): IProfileToView | null,
  get getProfileOrdersLoading(): boolean,
  fetchProfileOrders(): Promise<void>,
  createProfileOrder(payload: ICreateOrderPayload): Promise<void>,
  clearProfileOrders(): void,
}

export const profileStore = makeAutoObservable<IProfileStore>({
  currentProfile: null,
  profileOrders: [],
  profileOrdersLoading: false,

  set setCurrentProfile(profile: IProfile) {
    this.currentProfile = profile;
  },
  set setProfileOrders(payload: IOrder[]) {
    this.profileOrders = payload;
  },
  set setProfileOrdersLoading(payload: boolean) {
    this.profileOrdersLoading = payload;
  },

  get getCurrentProfile() {
    return this.currentProfile ? this.currentProfile : null;
  },
  get getCurrentProfileToView() {
    return this.currentProfile ? profileToView(this.currentProfile) : null;
  },
  get getProfileOrders() {
    return this.profileOrders;
  },
  get getProfileOrdersLoading() {
    return this.profileOrdersLoading;
  },
  async fetchProfileOrders() {
    runInAction(() => {
      profileStore.profileOrdersLoading = true;
    });
    const profileOrdersResponse = await getProfileOrders({ limit: 10, page: 1 });
    if (profileOrdersResponse.status === 200) {
      runInAction(() => {
        profileStore.profileOrders = profileOrdersResponse.data;
      });
    }
    runInAction(() => {
      profileStore.profileOrdersLoading = false;
    });
  },
  async createProfileOrder(payload) {
    await createOrder(payload);
  },
  clearProfileOrders() {
    profileStore.profileOrders = [];
  },
});
