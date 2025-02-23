import { AuthTerms } from "./auth-terms";

interface AuthLayoutProps {
  children: React.ReactNode;
  showTerms?: boolean;
}

export function AuthLayout({ children, showTerms = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 -z-10 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/20" />
        <div className="absolute -z-10 -inset-4 sm:-inset-6">
          <div className="h-full w-full opacity-30 blur-lg filter">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-800 to-purple-900 rounded-[inherit]" />
          </div>
        </div>
        <div className="relative space-y-8 p-8 sm:p-12">
          {children}
          {showTerms && <AuthTerms />}
        </div>
      </div>
    </div>
  );
}
