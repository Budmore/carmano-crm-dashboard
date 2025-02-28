// import { apiClient } from "@/lib/utils/api-client";
// import { redirect } from "next/navigation";

// async function checkSession() {
//   try {
//     await apiClient("/authentication/refresh-token", {
//       method: "POST",
//       auth: false,
//     });
//     return true;
//   } catch {
//     return false;
//   }
// }

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const hasValidSession = await checkSession();

  // Redirect to dashboard if user has valid session
  // if (hasValidSession) {
  //   redirect("/dashboard");
  // }

  return children;
}
