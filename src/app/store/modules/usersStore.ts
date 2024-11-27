import { makeAutoObservable } from 'mobx';
import { AccountType, IProfile, IProfileToView } from '../../../constants/types/profile.d';
import { fetchProfileById, fetchUsersWithModelType, fetchUsersWithPhotoType } from '../../../services/api/http/profileApi';
import { IUsersReponse } from '../../../constants/types/users.d';
import { profileToView } from '../../../services/serializers/profileSerialize';
import { defaultPagination } from '../../../constants';
import { deleteMedia, getPortfolioMedias } from '../../../services/api/http/mediaApi';
import { IMediaResponse } from '../../../constants/types/media.d';

interface IUserStore {
  usersData: IUsersReponse,
  usersLoading: boolean,
  userProfile: IProfile | null,
  userProfileLoading: boolean,
  profileMedias: IMediaResponse,
  mediasLoading: boolean,

  get getUsersListToView(): IProfileToView[] | [],
  get getUsersData(): IUsersReponse,
  get getUsersLoading(): boolean
  get getUserProfileLoading(): boolean,
  get getUserProfile(): IProfileToView | null,
  get getProfileMedias(): IMediaResponse,
  get getMediasLoading(): boolean,

  set setProfileMedias(payload: IMediaResponse),
  set setMediasLoading(loading: boolean),
  set setUserProfile(val: IProfile | null),
  set setUserProfileLoading(val: boolean),
  set setUsersLoading(val: boolean),
  set setUsersData(list: IUsersReponse),
  set setUsersPage(page: number)
  set setMediaPage(page: number)

  fetchUserProfile(val: number): Promise<void>,
  fetchProfileMedias(val: number): Promise<void>,
  fetchUsersByAccountType(accountType: AccountType): Promise<void>,
  removeMedia(payload: number): Promise<void>,
  clearUserProfile(): void,
  clearUsersData(): void
}

export const usersStore = makeAutoObservable<IUserStore>({
  usersData: {
    users: [],
    meta: {
      total: 0,
      page: 1,
      limit: 10,
    },
  },
  profileMedias: {
    media: [],
    Meta: {
      page: 1,
      limit: 10,
      total: 0,
    },
  },
  userProfile: null,
  mediasLoading: false,
  usersLoading: false,
  userProfileLoading: false,

  get getMediasLoading() {
    return this.mediasLoading;
  },
  get getProfileMedias() {
    return this.profileMedias;
  },
  get getUsersData() {
    return this.usersData;
  },
  get getUsersLoading() {
    return this.usersLoading;
  },
  get getUsersListToView() {
    return this.usersData.users.map((user: IProfile) => profileToView(user));
  },
  get getUserProfileLoading() {
    return this.userProfileLoading;
  },
  get getUserProfile() {
    return this.userProfile ? profileToView(this.userProfile) : null;
  },

  set setUserProfile(payload: IProfile | null) {
    this.userProfile = payload;
  },
  set setUserProfileLoading(payload: boolean) {
    this.userProfileLoading = payload;
  },
  set setUsersLoading(val: boolean) {
    this.usersLoading = val;
  },
  set setMediaPage(page: number) {
    this.profileMedias.Meta.page = page;
  },
  set setMediasLoading(loading: boolean) {
    this.mediasLoading = loading;
  },
  set setProfileMedias(mediaResponse: IMediaResponse) {
    if (mediaResponse.Meta.page !== this.profileMedias.Meta.page) {
      this.profileMedias.Meta = mediaResponse.Meta;
      this.profileMedias.media.concat(mediaResponse.media);
      return;
    }
    this.profileMedias = mediaResponse;
  },
  set setUsersData(payload: IUsersReponse) {
    if (this.usersData.meta.page !== payload.meta.page) {
      this.usersData.meta = payload.meta;
      this.usersData.users.concat(payload.users);
      return;
    }
    this.usersData = payload;
  },
  set setUsersPage(page: number) {
    this.usersData.meta.page = page;
  },
  async fetchUsersByAccountType(accountType: AccountType) {
    const { getUsersData: { meta: { page, limit } } } = usersStore;
    usersStore.setUsersLoading = true;
    if (accountType === AccountType.MODEL) {
      const modelsResponse = await fetchUsersWithModelType({ page, limit });
      if (modelsResponse.status === 200) {
        usersStore.setUsersData = modelsResponse.data;
      }
    } else if (accountType === AccountType.PHOTO) {
      const photographersResponse = await fetchUsersWithPhotoType({ page, limit });
      if (photographersResponse.status === 200) {
        usersStore.setUsersData = photographersResponse.data;
      }
    }
    usersStore.setUsersLoading = false;
  },
  async fetchUserProfile(userId: number) {
    usersStore.userProfileLoading = true;
    const profileResponse = await fetchProfileById(userId);
    usersStore.userProfileLoading = false;
    if (profileResponse.status === 200) {
      usersStore.setUserProfile = profileResponse.data;
    }
  },
  async fetchProfileMedias(userId: number) {
    const { getProfileMedias: { Meta: { page, limit } } } = usersStore;
    usersStore.setMediasLoading = true;
    const mediasResponse = await getPortfolioMedias({ page, limit }, userId);
    if (mediasResponse.status === 200) {
      usersStore.setProfileMedias = mediasResponse.data;
    }
    usersStore.setMediasLoading = false;
  },
  async removeMedia(mediaId: number) {
    await deleteMedia(mediaId);
    usersStore.fetchProfileMedias(usersStore.userProfile?.id || 0);
  },
  clearUserProfile() {
    usersStore.setUserProfile = null;
  },
  clearUsersData() {
    usersStore.usersData.meta = { ...defaultPagination };
    usersStore.usersData.users = [];
  },
});
