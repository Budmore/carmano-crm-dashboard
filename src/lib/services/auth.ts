import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

export const registerSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),

    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
});

export const newPasswordSchema = z
  .object({
    token: z.string(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type NewPasswordInput = z.infer<typeof newPasswordSchema>;

export interface AuthResponse {
  accessToken: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

export const authService = {
  async register(data: RegisterInput) {
    const response = await fetch(`${API_BASE_URL}/authentication/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to sign up");
    }
  },

  async login(data: LoginInput): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/authentication/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();

      if (error.statusCode === AuthErrorCode.UNVERIFIED_EMAIL) {
        throw createAuthError(
          "Please verify your email address to continue",
          AuthErrorCode.UNVERIFIED_EMAIL
        );
      }

      throw new Error(error.message || "Failed to sign in");
    }

    return response.json();
  },

  async resetPassword(data: ResetPasswordInput): Promise<void> {
    const response = await fetch(
      `${API_BASE_URL}/authentication/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to reset password");
    }
  },

  async newPassword(data: NewPasswordInput): Promise<void> {
    const response = await fetch(
      `${API_BASE_URL}/authentication/new-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to set new password");
    }
  },
  async confirmEmail(token: string): Promise<{ message: string }> {
    const response = await fetch(
      `${API_BASE_URL}/authentication/confirm-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to confirm email");
    }

    return response.json();
  },

  async resendVerificationEmail(email: string): Promise<void> {
    const response = await fetch(
      `${API_BASE_URL}/authentication/resend-verification-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to resend verification email");
    }
  },
};
