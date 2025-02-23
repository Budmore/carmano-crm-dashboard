import { primaryButtonStyles } from "@/components/ui/Button/Button.styles";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RegisterSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <CheckCircle
            className="h-16 w-16 text-green-500"
            aria-hidden="true"
          />
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Registration Successful!
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Your account has been created. Please check your email to verify
            your account.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/login" passHref legacyBehavior>
            <a className={primaryButtonStyles}>Continue to Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
