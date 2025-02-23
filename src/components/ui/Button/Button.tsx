import clsx from "clsx";
import React from "react";
import { primaryButtonStyles } from "./Button.styles"; // Updated import path

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={clsx(primaryButtonStyles, className)} {...props}>
      {children}
    </button>
  );
};
