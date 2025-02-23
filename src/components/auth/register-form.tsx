"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useSignUp } from "@/lib/hooks/use-auth";
import { registerSchema, type RegisterInput } from "@/lib/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const signUp = useSignUp();

  const onSubmit = async (data: RegisterInput) => {
    try {
      await signUp.mutateAsync(data);
      router.push("/register/success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("email")}
          type="email"
          label="Email"
          placeholder="Your email address"
          error={errors.email?.message}
        />
      </div>

      <div>
        <PasswordInput
          {...register("password")}
          placeholder="Your password"
          error={errors.password?.message}
        />
      </div>

      <div className="space-y-2">
        <PasswordInput
          {...register("confirmPassword")}
          label="Confirm Password"
          id="confirmPassword"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
        />
      </div>

      {signUp.error && (
        <div className="text-sm text-red-500">{signUp.error.message}</div>
      )}

      <Button type="submit" disabled={signUp.isPending}>
        {signUp.isPending ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
