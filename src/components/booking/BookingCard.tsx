import { format } from "date-fns/format";
import {
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Edit,
  FileText,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
  Trash2,
  XCircle,
} from "lucide-react";
import { customersMap, vehiclesMap } from "~/mock-data/mockBookings";
import { Booking } from "~/services/bookings/bookings.types";

interface BookingCardProps {
  booking: Booking;
  onPaymentClick: () => void;
  onEdit: () => void;
}

const formatDay = (date: Date) => format(date, "MM-dd-yy");
const formatTime = (date: Date) => format(date, "H:mm");

export function BookingCard({
  booking,
  onPaymentClick,
  onEdit,
}: BookingCardProps) {
  const customer = customersMap.get(booking.customerId);
  const vehicle = vehiclesMap.get(booking.vehicleId);

  const mainImage = vehicle?.images[0];

  const statusColors = {
    active: "bg-green-100 text-green-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const paymentStatusColors = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    overdue: "bg-red-100 text-red-800",
    unpaid: "bg-red-100 text-red-800",
    partial: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="p-6 hover:bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          {customer && (
            <div>
              <h3 className="font-semibold text-gray-900">{customer.name}</h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4" />
                {customer.email}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <Phone className="w-4 h-4" />
                {customer.phone}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
              statusColors[booking.status as keyof typeof statusColors]
            }`}
          >
            {booking.status}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
              paymentStatusColors[
                booking.paymentStatus as keyof typeof paymentStatusColors
              ]
            }`}
          >
            {booking.paymentStatus}
          </span>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          {mainImage && (
            <img
              src={mainImage.url}
              alt={vehicle.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
          )}
          <div>
            <h4 className="font-medium text-gray-900">{vehicle?.name}</h4>
            <p className="text-sm text-gray-500">Vehicle</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              Pickup
            </div>
            <p className="mt-1 font-medium">{formatDay(booking.pickup.date)}</p>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatTime(booking.pickup.date)}
              </div>
              {booking.pickup.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {booking.pickup.location}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              Return
            </div>
            <p className="mt-1 font-medium">{formatDay(booking.return.date)}</p>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatTime(booking.return.date)}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {booking.return.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-medium text-gray-900">
          Total Amount: <span className="text-lg">{booking.totalAmount}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={onPaymentClick}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 rounded-lg hover:bg-blue-50"
          >
            <CreditCard className="w-4 h-4" />
            Payment
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100">
            <FileText className="w-4 h-4" />
            Contract
          </button>
          {booking.status === "upcoming" && (
            <>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 rounded-lg hover:bg-green-50">
                <CheckCircle2 className="w-4 h-4" />
                Approve
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50">
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </>
          )}
          {booking.status !== "cancelled" && booking.status !== "completed" && (
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50">
              <Trash2 className="w-4 h-4" />
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
