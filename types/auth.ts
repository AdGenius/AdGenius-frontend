import { string } from "zod";

export type User = {
  id: number;
  email: string;
  full_name?: string;
  role?: string;
  created_at?: string;
  // Add any additional fields your backend sends
};

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  full_name: string;
  password: string;
}
