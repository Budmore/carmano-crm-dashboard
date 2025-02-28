import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

export function NavItem({ icon, text, active }: NavItemProps) {
  return (
    <button
      className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
      <span>{text}</span>
    </button>
  );
}
