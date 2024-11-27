import { IPagination, IPaginationResponse } from '.';
import { IProfile } from './profile.d';

export enum ShootingTypes {
  TFP = 'ТФП',
  PAYED = 'Оплачиваемая'
}
export enum ShootingPlaces {
  HOME = 'Дома',
  PHOTO_STUDIO = 'Фотостудия',
  NATURE = 'На природе'
}

export enum OrderStatuses {
  OPEN = 'Открытый',
  IN_PROCESS = 'Выполняется',
  READY = 'Выполнен',
  CLOSED = 'Закрыт'
}

export enum OrderDuration {
  LESS_HOUR = 'Менее часа',
  HOUR = '1 час',
  TWO_HOURS = '2 часа',
  THREE_HOURS = '3 часа',
  HALF_DAY = 'Пол дня',
  ALL_DAY = 'Весь день'
}

export interface IOrderResponse {
  orders: IOrder[],
  max_price: number,
  min_price: number,
  meta: IPaginationResponse,
}

export interface IOrderFilters {
  minPrice: number,
  maxPrice: number,
}

export interface IOrderPayload {
  pagination: IPagination,
  filters: IOrderFilters,
}

export interface IOrder {
  id: string,
  shoot_type: ShootingTypes,
  title: string,
  details: string,
  date: string,
  duration: OrderDuration,
  location: ShootingPlaces,
  address: string,
  price: number,
  in_favorite?: boolean,
  status: OrderStatuses,
  user: IProfile,
  executant: IProfile | null,
  private: boolean,
  created_at: string,
  updated_at: string,
}

export interface ICreateOrderPayload {
  shoot_type: ShootingTypes,
  title: string,
  details: string,
  date: Date | string,
  duration: OrderDuration,
  location: ShootingPlaces,
  address: string,
  status: OrderStatuses,
  price: number,
}
