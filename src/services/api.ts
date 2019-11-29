import axios from "axios";
import { API_URL } from "../utils/config";

export const client = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

type LoginConfig = { email: string; password: string };
type SignupConfig = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  inviteCode: string;
};

export default {
  login: ({ email, password }: LoginConfig): Promise<any> =>
    client.post("/login", {
      email,
      password
    }),
  signup: ({
    email,
    password,
    firstName,
    lastName,
    inviteCode
  }: SignupConfig): Promise<any> =>
    client.post("/signup", {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      invite_code: inviteCode
    })
};
