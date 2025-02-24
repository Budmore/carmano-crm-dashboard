"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/Button/Button";
import { PasswordInput } from "@/components/ui/password-input";
import { useNewPassword } from "@/lib/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { NewPasswordInput, newPasswordSchema } from "../../lib/services/auth";

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

  const {
    mutate: resetPassword,
    isLoading,
    error,
    isSuccess,
  } = useNewPassword();

  function onSubmit(data: NewPasswordInput) {
    resetPassword(data, {
      onSuccess: () => {
        // Wait a moment to show success message before redirecting
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>
            {error instanceof Error
              ? error.message
              : "Failed to reset password"}
          </AlertDescription>
        </Alert>
      )}

      {isSuccess && (
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
          disabled={isLoading}
          error={errors.password?.message}
        />
      </div>

      <div className="space-y-2">
        <PasswordInput
          {...register("confirmPassword")}
          label="Confirm New Password"
          id="confirmPassword"
          placeholder="Confirm your new password"
          disabled={isLoading}
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Reset Password
      </Button>
    </form>
  );
}
