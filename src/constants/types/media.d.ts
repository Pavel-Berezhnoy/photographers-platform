import { IPaginationResponse } from '.';

export interface LoadMediaPayload {
  data: FormData,
}

export interface IMedia {
  created_at: string,
  object_key: string,
  type: string,
  updated_at: string,
  url: string,
  id: number,
  user_id: number
}

export interface IMediaResponse {
  Meta: IPaginationResponse,
  media: Array<IMedia>,
}
