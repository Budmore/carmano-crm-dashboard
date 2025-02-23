import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthSide } from "@/components/auth/auth-side";
import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      side={
        <AuthSide
          testimonial={{
            content:
              "This platform has transformed how I manage my projects. The seamless experience and powerful features make it an essential tool for my daily work.",
            author: "Alex Thompson",
          }}
        />
      }
    >
      <AuthHeader
        title="Create an account"
        description="Enter your details to get started"
      />
      <RegisterForm />
      <AuthFooter
        text="Already have an account?"
        linkText="Sign in"
        href="/login"
      />
    </AuthLayout>
  );
}
