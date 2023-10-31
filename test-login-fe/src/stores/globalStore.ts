import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "../interfaces/user.interface";

export interface IGlobalStore {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
}

export const useGlobalStore = create(
  persist<IGlobalStore>(
    (set) => ({
      authUser: null,
      requestLoading: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
      setRequestLoading: (isLoading) =>
        set((state) => ({ ...state, requestLoading: isLoading })),
    }),
    { name: "globalStore" }
  )
);
