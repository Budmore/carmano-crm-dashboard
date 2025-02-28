import { BookingRow } from "@/components/booking/BookingRow";

export const RecentBookings = () => {
  return (
    <div>
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pickup Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Return Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <BookingRow
              customer="John Smith"
              vehicle="Winnebago Vista"
              pickupDate="2024-03-15"
              returnDate="2024-03-22"
              status="active"
            />
            <BookingRow
              customer="Sarah Johnson"
              vehicle="Airstream Classic"
              pickupDate="2024-03-18"
              returnDate="2024-03-25"
              status="pending"
            />
            <BookingRow
              customer="Mike Wilson"
              vehicle="Thor Motor Coach"
              pickupDate="2024-03-20"
              returnDate="2024-03-27"
              status="completed"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
