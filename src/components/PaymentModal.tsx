import { CreditCard, FileText, Receipt, X } from "lucide-react";
import { Booking } from "~/services/bookings/bookings.types";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking?: Booking | null;
}

export function PaymentModal({ isOpen, onClose, booking }: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Payment Management</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Amount</span>
                <span className="text-lg font-semibold">
                  {booking?.totalAmount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span
                  className={`px-2 py-1 text-sm font-medium rounded-full ${
                    booking?.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : booking?.paymentStatus === "partial"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {booking?.paymentStatus}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Process Payment</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <div className="relative">
                    <CreditCard className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="pl-10 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="bank">Bank Transfer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Documents</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Receipt className="w-5 h-5" />
                  <span>Generate Invoice</span>
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5" />
                  <span>View Payment History</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t bg-gray-50 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Process Payment
          </button>
        </div>
      </div>
    </div>
  );
}
