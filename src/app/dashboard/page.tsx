import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    redirect("/login");
  }

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
