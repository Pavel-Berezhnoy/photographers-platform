import { AxiosResponse } from 'axios';
import { http } from '.';
import {
  IOrder, ICreateOrderPayload, IOrderResponse, IOrderPayload,
} from '../../../constants/types/order.d';
import { IPagination } from '../../../constants/types';

export function createOrder(payload: ICreateOrderPayload): Promise<AxiosResponse<IOrder>> {
  return http.post('/orders', payload);
}

export function getProfileOrders(
  { limit = 10, page = 1 }: IPagination,
): Promise<AxiosResponse<IOrder[]>> {
  return http.get(`/orders/my?limit=${limit}&page=${page}`);
}

export function getOrders(
  {
    pagination: { limit = 10, page = 1 },
    filters: { maxPrice, minPrice },
  }: IOrderPayload,
): Promise<AxiosResponse<IOrderResponse>> {
  return http.get(
    `/orders?limit=${limit}&page=${page}&min_price=${minPrice}
    ${maxPrice ? `&max_price=${maxPrice}` : ''}`,
  );
}
