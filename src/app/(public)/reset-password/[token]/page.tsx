import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set New Password",
  description: "Set your new password",
};

export default async function NewPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Set new password</h1>

          <p className="mt-2 text-sm text-gray-600">
            Please enter your new password
          </p>
        </div>
        <NewPasswordForm token={token} />
      </div>
    </div>
  );
}
