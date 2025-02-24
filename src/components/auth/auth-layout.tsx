import { AuthTerms } from "./auth-terms";

interface AuthLayoutProps {
  children: React.ReactNode;
  showTerms?: boolean;
}

export function AuthLayout({ children, showTerms = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="relative w-full max-w-lg">
        {/* Outer glow effect */}
        <div className="absolute -z-20 -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-[2rem] blur opacity-30" />

        {/* Main container with border and shadow */}
        <div className="relative z-10 bg-white rounded-md border border-violet-100 shadow-[0_8px_40px_-12px_rgba(124,58,237,0.12)] backdrop-blur-sm">
          {/* Inner content wrapper */}
          <div className="relative space-y-8 p-8 sm:p-12">
            {/* Subtle inner border effect */}
            <div className="absolute inset-0 border border-white/50 rounded-[1.75rem] pointer-events-none" />

            {children}
            {showTerms && <AuthTerms />}
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute -z-30 top-0 left-0 w-20 h-20 bg-violet-500/10 rounded-full blur-2xl" />
        <div className="absolute -z-30 bottom-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
}
