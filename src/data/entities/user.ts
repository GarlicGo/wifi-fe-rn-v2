
import { UserRole, UserSex } from '../enums';
import { ID } from './core';

export interface User {
  userId: ID;
  username: string;
  password: string;
  nickname: string;
  phone: string;
  sex: UserSex;
  role: UserRole;
}
