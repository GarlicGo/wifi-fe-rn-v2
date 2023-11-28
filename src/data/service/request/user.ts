import { UpdateUser, User } from "../../entities";
import { http, transformResponse } from "../utils";

type Token = string;

export const login = async (params: {
  username: string;
  password: string;
}): Promise<Token> => {
  const res = await http.post("/api/users/user/login", params);
  return transformResponse(res);
};

export const register = async (
  params: Omit<User, "userId" | "role">
): Promise<void> => {
  const res = await http.post("/api/users/user/register", {
    ...params,
  });
  return transformResponse(res);
};

export const getMyInfo = async (): Promise<Omit<User, "role" | "password">> => {
  const res = await http.get("/api/users/user");
  return transformResponse(res);
};

export const updateMyInfo = async (params: UpdateUser): Promise<void> => {
  const res = await http.put("/api/users/user", params);
  return transformResponse(res);
};
