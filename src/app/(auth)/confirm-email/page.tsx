"use client";

import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { authService } from "~/lib/services/auth.service";
import { primaryButtonStyles } from "../../../components/ui/Button/Button.styles";

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["confirmEmail", token],
    queryFn: () => {
      if (!token) throw new Error("No token provided");
      return authService.confirmEmail(token);
    },
    enabled: !!token,
    retry: false,
  });

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4 p-8 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col items-center space-y-4">
            <XCircle className="h-12 w-12 text-red-500" />
            <h1 className="text-xl font-semibold text-center">
              Invalid confirmation link
            </h1>
            <p className="text-gray-600 text-center">
              No token provided. Please check your email for the correct link.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center space-y-4">
          {isLoading && (
            <>
              <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
              <p className="text-gray-600">Verifying your email...</p>
            </>
          )}

          {isError && (
            <>
              <XCircle className="h-12 w-12 text-red-500" />
              <h1 className="text-xl font-semibold text-center">
                Email confirmation failed
              </h1>
              <p className="text-gray-600 text-center">
                {error instanceof Error ? error.message : "An error occurred"}
              </p>
            </>
          )}

          {data && (
            <>
              <CheckCircle2 className="h-12 w-12 text-green-500" />
              <h1 className="text-xl font-semibold text-center">
                Email confirmed successfully
              </h1>
              <p className="text-gray-600 text-center">{data.message}</p>
            </>
          )}

          {(isError || data) && (
            <Link href="/login" passHref legacyBehavior>
              <a className={primaryButtonStyles}>Go to Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
