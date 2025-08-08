import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "@/lib/api";
import type { User } from "@/types/auth";

type AuthStore = {
  user: User | null | undefined;
  token: string | null;
  loading: boolean;

  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, full_name: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      token: null,
      loading: false,

      signin: async (email, password) => {
        set({ loading: true });
        try {
          const res = await axios.post("api/v1/auth/login", {
            email,
            password,
          });
          console.log(res);
          set({
            user: res.data.user,
            token: res.data.token,
            loading: false,
          });
        } catch (err) {
          set({ loading: false });
          throw err;
        }
      },

      signup: async (email, full_name, password) => {
        set({ loading: true });
        try {
          const res = await axios.post("api/v1/auth/register", {
            email,
            full_name,
            password,
          });
          console.log(res);
          set({
            user: res.data.user,
            token: res.data.token,
            loading: false,
          });
        } catch (err) {
          set({ loading: false });
          throw err;
        }
      },

      logout: () => {
        set({ user: null, token: null });
      },

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
