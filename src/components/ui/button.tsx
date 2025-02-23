import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, loading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className="w-full relative flex items-center justify-center px-4 py-3 text-sm font-medium text-white rounded-sm bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500/60 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors duration-200"
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
