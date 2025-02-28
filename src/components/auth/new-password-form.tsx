"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/Button/Button";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { newPassword } from "~/lib/services/auth.service";
import {
  NewPasswordInput,
  newPasswordSchema,
} from "~/lib/validations/authValidations";

interface NewPasswordFormProps {
  token: string;
}

export function NewPasswordForm({ token }: NewPasswordFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordInput>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      token,
    },
  });

  const mutation = useMutation({
    mutationFn: newPassword,
    onSuccess: () => {
      // Wait a moment to show success message before redirecting
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    },
  });

  function onSubmit(data: NewPasswordInput) {
    mutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {mutation.error && (
        <Alert variant="destructive">
          <AlertDescription>
            {mutation.error
              ? mutation.error.message
              : "Failed to reset password"}
          </AlertDescription>
        </Alert>
      )}

      {mutation.isSuccess && (
        <Alert className="border-green-500 text-green-500">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            Password reset successful! Redirecting to login...
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <PasswordInput
          {...register("password")}
          label="New Password"
          id="password"
          placeholder="Enter your new password"
          disabled={mutation.isPending}
          error={errors.password?.message}
        />
      </div>

      <div className="space-y-2">
        <PasswordInput
          {...register("confirmPassword")}
          label="Confirm New Password"
          id="confirmPassword"
          placeholder="Confirm your new password"
          disabled={mutation.isPending}
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        Reset Password
      </Button>
    </form>
  );
}
