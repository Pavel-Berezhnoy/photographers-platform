import { IPaginationResponse } from '.';
import { IProfile } from './profile.d';

export interface IUsersReponse {
  meta: IPaginationResponse,
  users: IProfile[]
}
