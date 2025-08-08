"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useForm, SubmitHandler } from "react-hook-form";
import type { SignInForm } from "@/types/auth";
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
  const login = useAuthStore((state) => state.signin);
  const router = useRouter();

  const { register, handleSubmit } = useForm<SignInForm>();

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    try {
      await login(data.email, data.password);
      // router.push("/dashboard"); // redirect on success
      console.log("Login successful");
    } catch (err) {
      console.log(err.response.data.detail || "Login failed");
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
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link" onClick={() => router.push("/sign-up")}>
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
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
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
