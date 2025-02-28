import { Calendar, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

// Helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Booking {
  camper: string;
  start: string;
  end: string;
  color: string;
}

const bookings: Booking[] = [
  {
    camper: "V001",
    start: "2024-02-14",
    end: "2024-02-21",
    color: "bg-blue-500",
  },
  {
    camper: "V001",
    start: "2024-07-01",
    end: "2024-08-12",
    color: "bg-blue-500",
  },
  {
    camper: "V002",
    start: "2024-03-14",
    end: "2024-03-21",
    color: "bg-green-500",
  },
  {
    camper: "V002",
    start: "2024-06-01",
    end: "2024-08-11",
    color: "bg-green-500",
  },
  {
    camper: "V003",
    start: "2024-03-01",
    end: "2024-08-11",
    color: "bg-purple-500",
  },
];

const isDateInRange = (date: string, start: string, end: string) => {
  const checkDate = new Date(date);
  const startDate = new Date(start);
  const endDate = new Date(end);
  return checkDate >= startDate && checkDate <= endDate;
};

const getOccupancyForDate = (date: string) => {
  return bookings.filter((booking) =>
    isDateInRange(date, booking.start, booking.end)
  );
};

interface DayDetailsProps {
  date: string;
  onClose: () => void;
}

function DayDetails({ date, onClose }: DayDetailsProps) {
  const occupyingCampers = getOccupancyForDate(date);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{formattedDate}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {occupyingCampers.length === 0 ? (
          <p className="text-gray-600">No bookings for this date</p>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600">
              {occupyingCampers.length} active booking
              {occupyingCampers.length > 1 ? "s" : ""}:
            </p>
            {occupyingCampers.map((booking, index) => (
              <div
                key={index}
                className="border-l-4 pl-3"
                style={{
                  borderColor: booking.color.replace("bg-", ""),
                }}
              >
                <div className="font-semibold">{booking.camper}</div>
                <div className="text-sm text-gray-600">
                  {new Date(booking.start).toLocaleDateString()} -{" "}
                  {new Date(booking.end).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

function Tooltip({ children, content }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

function MonthCalendar({ year, month }: { year: number; month: number }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">{months[month]}</h3>
        <div className="grid grid-cols-7 gap-1">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div
              key={day}
              className="text-xs font-medium text-gray-500 text-center"
            >
              {day}
            </div>
          ))}
          {Array(firstDay)
            .fill(null)
            .map((_, i) => (
              <div key={`empty-${i}`} className="h-10" />
            ))}
          {days.map((day) => {
            const date = `${year}-${String(month + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
            const occupyingCampers = getOccupancyForDate(date);
            const hasBookings = occupyingCampers.length > 0;

            const tooltipContent = hasBookings
              ? `${occupyingCampers.length} booking${
                  occupyingCampers.length > 1 ? "s" : ""
                }: ${occupyingCampers.map((b) => b.camper).join(", ")}`
              : "Available";

            return (
              <Tooltip key={day} content={tooltipContent}>
                <button
                  onClick={() => hasBookings && setSelectedDate(date)}
                  className={`h-10 w-full text-xs relative bg-white border border-gray-100
                    rounded transition-all hover:border-blue-200 hover:shadow-sm
                    ${hasBookings ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span className="absolute top-1 left-1/2 -translate-x-1/2">
                    {day}
                  </span>
                  <div className="absolute bottom-1 left-1 right-1 flex flex-col gap-[2px]">
                    {occupyingCampers.map((booking, index) => (
                      <div
                        key={index}
                        className={`h-[3px] rounded-full ${booking.color}`}
                      />
                    ))}
                  </div>
                </button>
              </Tooltip>
            );
          })}
        </div>
      </div>
      {selectedDate && (
        <DayDetails date={selectedDate} onClose={() => setSelectedDate(null)} />
      )}
    </>
  );
}

function YearSelector({
  year,
  onChange,
}: {
  year: number;
  onChange: (year: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const years = Array.from({ length: 5 }, (_, i) => year - 2 + i);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow hover:shadow-md transition-all"
      >
        <span className="font-semibold">{year}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg z-20 py-1">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => {
                  onChange(y);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                  y === year ? "font-semibold bg-blue-50" : ""
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function BookingCalendar() {
  const [year, setYear] = useState(2024);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Occupancy Calendar
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <YearSelector year={year} onChange={setYear} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {months.map((_, index) => (
            <MonthCalendar key={index} year={year} month={index} />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Camper Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["V001", "V002", "V003"].map((camper, index) => {
              const camperBookings = bookings.filter(
                (b) => b.camper === camper
              );
              const color = camperBookings[0]?.color || "";
              return (
                <div key={camper} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-4 h-4 ${color} rounded`} />
                    <h3 className="font-semibold">{camper}</h3>
                  </div>
                  <ul className="space-y-2">
                    {camperBookings.map((booking, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        {new Date(booking.start).toLocaleDateString()} -{" "}
                        {new Date(booking.end).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
