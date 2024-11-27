import { makeAutoObservable } from 'mobx';
import { IChat, IChatMessage } from '../../../constants/types/chat.d';
import {
  createChat, fetchChatList, fetchChatMessages, postMessage,
} from '../../../services/api/http/chatApi';

export interface IChatStore {
  currentChat: IChat | null,
  list: IChat[],
  messages: IChatMessage[],

  set setChatMessages(payload: IChatMessage[]),
  set setCurrentChat(profile: IChat),
  set setChatList(payload: IChat[]),

  get getChatMessages(): IChatMessage[],
  get getCurrentChat(): IChat | null,
  get getChatList(): IChat[],

  addTempChat(chat: IChat): void,
  createNewChat(targetUserId: number): Promise<IChat>,
  createMessage(chatId: number, payload: FormData): Promise<void>,
  fetchChatList(): Promise<void>,
  fetchMessages(chatId: number): Promise<void>,
  clearChatList(): void,
}

export const chatStore = makeAutoObservable<IChatStore>({
  currentChat: null,
  list: [],
  messages: [],

  set setChatList(payload: IChat[]) {
    this.list = payload;
  },
  set setCurrentChat(profile: IChat) {
    this.currentChat = profile;
  },
  set setChatMessages(payload: IChatMessage[]) {
    this.messages = payload;
  },

  get getCurrentChat() {
    return this.currentChat;
  },
  get getChatList() {
    return this.list;
  },
  get getChatMessages() {
    return this.messages;
  },

  addTempChat(chat: IChat) {
    chatStore.setChatList = [chat, ...chatStore.getChatList];
  },
  async createNewChat(targetUserId: number) {
    const newChatResponse = await createChat(targetUserId);
    if (newChatResponse.status === 200) {
      chatStore.setCurrentChat = newChatResponse.data;
    }
    return newChatResponse.data;
  },
  async createMessage(chatId: number, payload: FormData) {
    postMessage(chatId, payload);
  },
  async fetchChatList() {
    const chatListResponse = await fetchChatList();
    if (chatListResponse.status === 200) {
      if (chatStore.getChatList[0]?.id === -1) {
        chatStore.setChatList = [chatStore.getChatList[0], ...chatListResponse.data];
      } else {
        chatStore.setChatList = chatListResponse.data;
      }
    }
  },
  async fetchMessages(chatId) {
    const chatMessagesResponse = await fetchChatMessages(chatId);
    if (chatMessagesResponse.status === 200) {
      chatStore.setChatMessages = chatMessagesResponse.data;
    }
  },
  clearChatList() {
    chatStore.setChatList = [];
  },
});
