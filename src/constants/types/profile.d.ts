export interface IProfile {
  id: number,
  avatar: string,
  name: string,
  sur_name: string,
  user_type: AccountType,
  email: string,
  rating: number,
  count_reviews: number,
  location: string,
  created_at: string,
  updated_at: string,
  in_favorite?: boolean,
  about: string,
  phone: string,
  link: string,
}

export enum AccountType {
  MODEL = 'model',
  PHOTO = 'photographer',
}

export interface IAccountTypesToView {
  [AccountType.MODEL]: 'Модель',
  [AccountType.PHOTO]: 'Фотограф'
}

type IAccountTypeToView = IAccountTypesToView[keyof IAccountTypesToView]

export interface IProfileToView {
  id: number,
  avatar: string,
  name: string,
  sur_name: string,
  in_favorite?: boolean,
  user_type: IAccountTypeToView,
  email: string,
  rating: number,
  count_reviews: number,
  location: string,
  created_at: string,
  updated_at: string,
  about: string,
  phone: string,
  link: string,
}

export interface IUploadedAvatar {
  url: string,
}

export interface IUploadAvatarPayload {
  data: FormData,
}

export interface IChangeProfilePayload {
  data: {
    name: string,
    avatar: string,
    sur_name: string,
    user_type: AccountType,
    email: string,
    location: string,
    created_at?: string,
    updated_at?: string,
    about: string,
    phone: string,
    link: string,
  }
}
