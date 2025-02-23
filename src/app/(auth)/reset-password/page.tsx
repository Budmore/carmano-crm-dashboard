import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthLayout } from "@/components/auth/auth-layout";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your password",
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout showTerms={false}>
      <AuthHeader
        title="Reset your password"
        description="Enter your email address and we'll send you a link to reset your password"
      />
      <ResetPasswordForm />
      <AuthFooter text="" linkText="Back to login" href="/login" />
    </AuthLayout>
  );
}
