"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  AuthErrorCode,
  login,
  type AuthError,
} from "~/lib/services/auth.service";
import {
  loginSchema,
  type LoginInput,
} from "~/lib/validations/authValidations";
import { ResendVerification } from "./resend-verification";

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data);
  };

  const error = loginMutation.error as AuthError | null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("email")}
          label="Email"
          type="email"
          placeholder="Your email address"
          error={errors.email?.message}
        />
      </div>

      <div>
        <PasswordInput
          {...register("password")}
          placeholder="Your password"
          error={errors.password?.message}
          forgotPasswordHref="/reset-password"
        />
      </div>

      {error && (
        <div className="space-y-3">
          <div className="flex items-start space-x-2 text-sm">
            <div className="flex-shrink-0 mt-0.5">
              <svg
                className="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="flex-1 text-red-500">{error.message}</div>
          </div>

          {error.code === AuthErrorCode.UNVERIFIED_EMAIL && (
            <ResendVerification email={getValues("email")} />
          )}
        </div>
      )}

      <Button type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
