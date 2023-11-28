import { create } from "zustand";
import { User, getMyInfo } from "../data";
import { toast } from "../utils";
import { useQuery } from "react-query";

export type StoreUser = Omit<User, "role" | "password">;

type UserStore = {
  user?: StoreUser;
  setUser: (user: StoreUser) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user: StoreUser) => set(() => ({ user })),
}));

export const useUser = () => {
  const user = useUserStore((state) => state.user);
  return user;
};

export const useSetUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  return setUser;
};

export const useInitUser = () => {
  const setUser = useSetUser();

  useQuery("getMyInfo", getMyInfo, {
    onSuccess(data) {
      setUser(data);
    },
    onError(err) {
      toast(err?.toString() ?? "Failed");
    },
    cacheTime: 100,
  });
};

export const useUpdateUser = () => {
  const setUser = useSetUser();

  const { refetch } = useQuery("getMyInfo", getMyInfo, {
    enabled: false,
    onSuccess(data) {
      setUser(data);
    },
    onError(err) {
      toast(err?.toString() ?? "Failed");
    },
    cacheTime: 100,
  });

  return refetch;
};
