import { makeAutoObservable } from 'mobx';
import { IOrderFilters, IOrderResponse } from '../../../constants/types/order.d';
import { getOrders } from '../../../services/api/http/orderApi';

interface IOrderStore {
  orders: IOrderResponse,
  ordersLoading: boolean,

  set setOrders(payload: IOrderResponse),
  set setOrdersLoading(payload: boolean),
  set setOrdersPage(payload: number),

  get getOrders(): IOrderResponse,
  get getOrdersLoading(): boolean,
  fetchOrders(payload: IOrderFilters): Promise<void>,
  clearOrders(): void
}

export const ordersStore = makeAutoObservable<IOrderStore>({
  orders: {
    max_price: 0,
    min_price: 0,
    orders: [],
    meta: {
      page: 1,
      limit: 10,
      total: 0,
    },
  },
  ordersLoading: false,

  set setOrders(payload: IOrderResponse) {
    this.orders = payload;
  },
  set setOrdersLoading(payload: boolean) {
    this.ordersLoading = payload;
  },
  set setOrdersPage(payload: number) {
    this.orders.meta.page = payload;
  },

  get getOrders() {
    return this.orders;
  },
  get getOrdersLoading() {
    return this.ordersLoading;
  },
  async fetchOrders({ maxPrice, minPrice }: IOrderFilters) {
    ordersStore.setOrdersLoading = true;
    const { limit, page } = ordersStore.orders.meta;
    const ordersResponse = await getOrders({
      filters: { maxPrice, minPrice },
      pagination: { limit, page },
    });
    const orders: IOrderResponse = {
      meta: ordersResponse.data.meta,
      max_price: ordersResponse.data.max_price,
      min_price: ordersResponse.data.min_price,
      orders: [...ordersStore.getOrders.orders, ...ordersResponse.data.orders],
    };
    ordersStore.setOrders = orders;
    ordersStore.setOrdersLoading = false;
  },
  clearOrders() {
    ordersStore.orders.meta = {
      limit: 10,
      page: 1,
      total: 0,
    };
    ordersStore.orders.orders = [];
  },
});
