import { CalendarDays, List } from "lucide-react";
import React from "react";

type ViewMode = "list" | "calendar";

interface BookingViewModeProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const BookingViewMode: React.FunctionComponent<BookingViewModeProps> = ({
  setViewMode,
  viewMode,
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow p-1">
      <button
        onClick={() => setViewMode("list")}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          viewMode === "list"
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <List className="w-4 h-4" />
        List
      </button>
      <button
        onClick={() => setViewMode("calendar")}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          viewMode === "calendar"
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <CalendarDays className="w-4 h-4" />
        Calendar
      </button>
    </div>
  );
};
