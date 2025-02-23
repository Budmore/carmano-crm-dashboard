"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/lib/hooks/use-auth";
import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from "@/lib/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const resetPassword = useResetPassword();

  const onSubmit = (data: ResetPasswordInput) => {
    resetPassword.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("email")}
          label="Email"
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />
      </div>

      {resetPassword.error && (
        <div className="text-sm text-red-500">
          {resetPassword.error.message}
        </div>
      )}

      {resetPassword.isSuccess && (
        <div className="text-sm text-green-500">
          Password reset instructions have been sent to your email.
        </div>
      )}

      <Button type="submit" disabled={resetPassword.isPending}>
        {resetPassword.isPending ? "Sending..." : "Reset Password"}
      </Button>
    </form>
  );
}
