"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { resendVerificationEmail } from "~/lib/services/auth.service";

interface ResendVerificationProps {
  email: string;
}

export function ResendVerification({ email }: ResendVerificationProps) {
  const resendMutation = useMutation({
    mutationFn: resendVerificationEmail,
  });

  const handleResendVerification = () => {
    resendMutation.mutate(email);
  };

  return (
    <div className="rounded-md border border-gray-200 p-4 bg-gray-50">
      <div className="space-y-3">
        <div className="text-sm text-gray-700">
          Haven&apos;t received the verification email?
        </div>

        {!resendMutation.isSuccess && (
          <div className="flex items-center space-x-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleResendVerification}
              disabled={resendMutation.isPending}
              fullWidth={false}
            >
              {resendMutation.isPending ? (
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

        {resendMutation.isSuccess && (
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
              Verification email sent successfully. Please check your inbox.
            </div>
          </div>
        )}

        {resendMutation.error && (
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
              {resendMutation.error.message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
