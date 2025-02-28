import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

export function StatCard({
  icon,
  title,
  value,
  change,
  positive,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
        <div
          className={`flex items-center gap-1 text-sm ${
            positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {positive ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
