import { User } from "./user.nterface";

export interface CheckTokenResponse {
  user:  User;
  token: string;
}
