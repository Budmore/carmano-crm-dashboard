import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const hasAccessToken = !!cookieStore.get("accessToken");

  if (hasAccessToken) {
    redirect("/dashboard");
  }

  return children;
}
