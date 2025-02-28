import { AxiosError } from "axios";
import axiosClient from "../utils/axiosClient";
import {
  LoginInput,
  NewPasswordInput,
  registerSchema,
  ResetPasswordInput,
} from "../validations/authValidations";

export interface AuthResponse {
  accessToken: string;
}

export enum AuthErrorCode {
  UNVERIFIED_EMAIL = 403,
}

export interface AuthError extends Error {
  code: AuthErrorCode;
}

export function createAuthError(
  message: string,
  code: AuthErrorCode
): AuthError {
  const error = new Error(message) as AuthError;
  error.code = code;
  return error;
}

export type RegisterFormInputs = typeof registerSchema._output;

export const registerUser = async (data: RegisterFormInputs): Promise<void> => {
  try {
    const response = await axiosClient.post("/authentication/register", data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError && err.response?.status === 409) {
      throw new AxiosError("Email already exists");
    }
    if (err instanceof AxiosError) {
      throw new AxiosError(
        err.response?.data?.message || "Registration failed"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export const login = async (credentials: LoginInput): Promise<AuthResponse> => {
  try {
    const response = await axiosClient.post(
      "/authentication/login",
      credentials
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(err.response?.data?.message || "Login failed");
    }
    throw new Error("An unexpected error occurred");
  }
};

export const logout = async (): Promise<void> => {
  const response = await axiosClient.post("/authentication/logout");
  return response.data;
};

export const resetPassword = async (
  data: ResetPasswordInput
): Promise<void> => {
  try {
    const response = await axiosClient.post(
      "/authentication/reset-password",
      data
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(
        err.response?.data?.message || "Failed to reset password"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export const newPassword = async (data: NewPasswordInput): Promise<void> => {
  try {
    const response = await axiosClient.post(
      "/authentication/new-password",
      data
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(
        err.response?.data?.message || "Failed to set new password"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export const confirmEmail = async (
  token: string
): Promise<{ message: string }> => {
  try {
    const response = await axiosClient.post("/authentication/confirm-email", {
      token,
    });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(
        err.response?.data?.message || "Failed to confirm email"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export const resendVerificationEmail = async (email: string): Promise<void> => {
  try {
    const response = await axiosClient.post(
      "/authentication/resend-verification-email",
      { email }
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(
        err.response?.data?.message || "Failed to resend verification email"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};
