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
