import { IPaginationResponse } from './types';
import { OrderStatuses } from './types/order.d';
import { IAccountTypesToView } from './types/profile.d';

export const accountTypesToView: IAccountTypesToView = {
  model: 'Модель',
  photographer: 'Фотограф',
};

export const defaultPagination: IPaginationResponse = {
  limit: 10,
  page: 1,
  total: 0,
};

export const orderStatusColors = {
  [OrderStatuses.OPEN]: 'success',
  [OrderStatuses.IN_PROCESS]: 'warning',
  [OrderStatuses.CLOSED]: 'error',
  [OrderStatuses.READY]: 'success',
};
