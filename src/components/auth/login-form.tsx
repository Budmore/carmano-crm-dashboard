"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useResendVerification, useSignIn } from "@/lib/hooks/use-auth";
import {
  AuthErrorCode,
  loginSchema,
  type AuthError,
  type LoginInput,
} from "@/lib/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const signIn = useSignIn();
  const resendVerification = useResendVerification();

  const onSubmit = (data: LoginInput) => {
    signIn.mutate(data);
  };

  const handleResendVerification = () => {
    const error = signIn.error as AuthError | null;
    if (!error || error.code !== AuthErrorCode.UNVERIFIED_EMAIL) return;
    resendVerification.mutate({ email: getValues("email") });
  };

  const error = signIn.error as AuthError | null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("email")}
          label="Email"
          type="email"
          placeholder="Your email address"
          error={errors.email?.message}
        />
      </div>

      <div>
        <PasswordInput
          {...register("password")}
          placeholder="Your password"
          error={errors.password?.message}
          forgotPasswordHref="/reset-password"
        />
      </div>

      {error && (
        <div className="space-y-3">
          <div className="flex items-start space-x-2 text-sm">
            <div className="flex-shrink-0 mt-0.5">
              <svg
                className="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="flex-1 text-red-500">{error.message}</div>
          </div>

          {error.code === AuthErrorCode.UNVERIFIED_EMAIL && (
            <div className="rounded-md border border-gray-200 p-4 bg-gray-50">
              <div className="space-y-3">
                <div className="text-sm text-gray-700">
                  Haven't received the verification email?
                </div>

                {!resendVerification.isSuccess && (
                  <div className="flex items-center space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleResendVerification}
                      disabled={resendVerification.isPending}
                      fullWidth={false}
                    >
                      {resendVerification.isPending ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-violet-600"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Resend verification email"
                      )}
                    </Button>
                  </div>
                )}

                {resendVerification.isSuccess && (
                  <div className="flex items-start space-x-2 text-sm">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-green-600">
                      Verification email sent successfully. Please check your
                      inbox.
                    </div>
                  </div>
                )}

                {resendVerification.error && (
                  <div className="flex items-start space-x-2 text-sm">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-red-500">
                      {resendVerification.error.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <Button type="submit" disabled={signIn.isPending}>
        {signIn.isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
