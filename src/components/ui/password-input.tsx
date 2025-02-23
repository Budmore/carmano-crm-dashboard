import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { Input } from "./input";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  forgotPasswordHref?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label = "Password", forgotPasswordHref, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-900"
          >
            {label}
          </label>
          {forgotPasswordHref && (
            <a
              href={forgotPasswordHref}
              className="text-sm font-medium text-violet-600 hover:text-violet-500"
            >
              Forgot password?
            </a>
          )}
        </div>
        <div className="relative">
          <Input
            ref={ref}
            type={isPasswordVisible ? "text" : "password"}
            addonAfter={
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="flex items-center text-sm leading-5"
              >
                {isPasswordVisible ? (
                  <Eye className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                )}
              </button>
            }
            {...props}
          />
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
