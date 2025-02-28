import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingCard } from "~/pages/bookings/components/BookingCard";
import { Booking } from "~/services/bookings/bookings.types";

interface BookingListCondensedProps {
  bookings: Booking[];
  onEditBooking: (booking: Booking) => void;
  onPaymentClick: (booking: Booking) => void;
}

export function BookingListCondensed({
  bookings,
  onEditBooking,
  onPaymentClick,
}: BookingListCondensedProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onPaymentClick={() => onPaymentClick(booking)}
            onEdit={() => onEditBooking(booking)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * 10 + 1} to{" "}
          {Math.min(currentPage * 10, 23)} of 23 results
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
            {currentPage}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === 3}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
