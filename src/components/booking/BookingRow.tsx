interface BookingRowProps {
  customer: string;
  vehicle: string;
  pickupDate: string;
  returnDate: string;
  status: 'active' | 'pending' | 'completed';
}

export function BookingRow({ customer, vehicle, pickupDate, returnDate, status }: BookingRowProps) {
  const statusClasses = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{customer}</td>
      <td className="px-6 py-4 whitespace-nowrap">{vehicle}</td>
      <td className="px-6 py-4 whitespace-nowrap">{pickupDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">{returnDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
    </tr>
  );
}