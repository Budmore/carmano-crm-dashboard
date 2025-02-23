import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthSide } from "@/components/auth/auth-side";
import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <AuthLayout
      side={
        <AuthSide
          testimonial={{
            content:
              "This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.",
            author: "Sofia Davis",
          }}
        />
      }
    >
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
