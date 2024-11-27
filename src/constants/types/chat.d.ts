import { IProfile } from './profile.d';

export enum MessageTypes {
  ORDER = 'order',
  MESSAGE = 'message',
}

export interface IChatMessage {
  id: string,
  sender: IProfile,
  content: string,
  created_at: string,
  files: Array<string>,
  viewed: boolean,
  type: MessageTypes,
  order_id?: string,
}

export interface IChat {
  id?: number,
  first_user: IProfile,
  second_user: IProfile,
}

export interface IMessagePayload {
  sender: number,
  recipient: number,
  files?: File[],
  content: string,
  type: MessageTypes,
  orderId?: string,
}
