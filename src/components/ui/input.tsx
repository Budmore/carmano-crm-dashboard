import { forwardRef, ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  addonAfter?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, id, addonAfter, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            {...props}
          />
          {addonAfter && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {addonAfter}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
