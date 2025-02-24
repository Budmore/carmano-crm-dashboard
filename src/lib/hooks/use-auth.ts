import { useMutation } from "@tanstack/react-query";
import {
  authService,
  LoginInput,
  NewPasswordInput,
  RegisterInput,
  ResetPasswordInput,
} from "../services/auth";

export function useSignUp() {
  return useMutation({
    mutationFn: (data: RegisterInput) => authService.register(data),
  });
}

export function useSignIn() {
  return useMutation({
    mutationFn: async (data: LoginInput) => {
      return await authService.login(data);
    },
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordInput) => authService.resetPassword(data),
  });
}

export function useResendVerification() {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      return await authService.resendVerificationEmail(email);
    },
  });
}

export function useNewPassword() {
  return useMutation({
    mutationFn: (data: NewPasswordInput) => authService.newPassword(data),
  });
}
