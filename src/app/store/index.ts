import { createContext, useContext } from 'react';
import { ordersStore } from './modules/ordersStore';
import { reviewStore } from './modules/reviewStore';
import { favoriteStore } from './modules/favoriteStore';
import { usersStore } from './modules/usersStore';
import { chatStore } from './modules/chatStore';
import { profileStore } from './modules/profileStore';

export const store = {
  profileStore,
  chatStore,
  usersStore,
  favoriteStore,
  reviewStore,
  ordersStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};
