import { User } from "./user.nterface";

export interface LoginResponse {
  user:  User;
  token: string;
}
