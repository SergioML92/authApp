import { User } from "./user.nterface";

export interface RegisterResponse {
  user:  User;
  token: string;
}
