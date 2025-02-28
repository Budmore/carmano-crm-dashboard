"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { resetPassword } from "~/lib/services/auth.service";
import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from "~/lib/validations/authValidations";

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: resetPassword,
  });

  const onSubmit = (data: ResetPasswordInput) => {
    mutation.mutate(data);
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

      {mutation.error && (
        <div className="text-sm text-red-500">
          {mutation.error
            ? mutation.error.message
            : "Failed to send reset password email"}
        </div>
      )}

      {mutation.isSuccess && (
        <div className="text-sm text-green-500">
          Password reset instructions have been sent to your email.
        </div>
      )}

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Sending..." : "Reset Password"}
      </Button>
    </form>
  );
}
