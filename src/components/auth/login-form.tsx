"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {
    setIsLoading(true);

    try {
      // Add your authentication logic here
      // Example:
      // await signIn("credentials", {
      //   email: values.email,
      //   password: values.password,
      //   redirect: false,
      // });

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        {...register("email")}
        type="email"
        label="Email"
        id="email"
        placeholder="name@example.com"
        error={errors.email?.message}
        disabled={isLoading}
      />

      <PasswordInput
        {...register("password")}
        id="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        disabled={isLoading}
        forgotPasswordHref="/reset-password"
      />

      <Button type="submit" loading={isLoading}>
        Sign In
      </Button>
    </form>
  );
}
