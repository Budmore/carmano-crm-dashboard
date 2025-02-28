import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Add public paths that don't require authentication

const publicPaths = [
  "/",
  "/login",
  "/sign-up",
  "/reset-password",
  "/confirm-email",
];

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");
  const { pathname } = request.nextUrl;

  // Allow access to public paths
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect to login if no refresh token is present

  if (!refreshToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
