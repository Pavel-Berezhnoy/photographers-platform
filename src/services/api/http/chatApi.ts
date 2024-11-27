import { AxiosResponse } from 'axios';
import { http } from '.';
import { IChat, IChatMessage } from '../../../constants/types/chat.d';

export function fetchChatList(): Promise<AxiosResponse<IChat[]>> {
  return http.get('/rooms');
}

export function createChat(targetUserId: number): Promise<AxiosResponse<IChat>> {
  return http.post(`/rooms/${targetUserId}`);
}

export function postMessage(
  chatId: number,
  payload: FormData,
): Promise<AxiosResponse<IChat>> {
  return http.postForm(`/rooms/messages/${chatId}`, payload);
}

export function fetchChatMessages(chatId: number): Promise<AxiosResponse<IChatMessage[]>> {
  return http.get(`/rooms/messages/${chatId}`);
}
