export async function logout() {
  const response = await fetch("/api/generic/authentication/logout", {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  }

  return response;
}
