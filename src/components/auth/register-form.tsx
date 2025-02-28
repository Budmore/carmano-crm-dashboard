"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { RegisterFormInputs, registerUser } from "@/lib/services/auth.service";
import {
  registerSchema,
  type RegisterInput,
} from "@/lib/validations/authValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/register/success");
    },
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    mutation.mutate(data);
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

      {!!mutation.error && (
        <div className="text-sm text-red-500">{mutation.error.message}</div>
      )}

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
