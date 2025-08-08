"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useForm, SubmitHandler } from "react-hook-form";
import type { SignUpForm } from "@/types/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const login = useAuthStore((state) => state.signup);
  const router = useRouter();

  const { register, handleSubmit } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    try {
      await login(data.email, data.full_name, data.password);
      // router.push("/dashboard"); // redirect on success
      console.log("Sign up successful");
    } catch (err) {
      console.log(err.response.data.detail || "Sign up failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto"
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Enter your email below to create a new account
            </CardDescription>
            <CardAction>
              <Button variant="link" onClick={() => router.push("/sign-in")}>
                Sign In
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  {...register("full_name", { required: true })}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign Up with Google
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
