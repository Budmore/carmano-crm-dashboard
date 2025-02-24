import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Welcome back"
        description="Enter your email to sign in to your account"
      />
      <LoginForm />
      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        href="/register"
      />
    </AuthLayout>
  );
}
