interface LocationSchedule {
  date: Date;
  location?: string;
}

export type BookingStatus = "ongoing" | "upcoming" | "completed" | "cancelled";
export type PaymentStatus = "unpaid" | "partial" | "paid" | "overdue";

export interface Booking {
  id: string;
  customerId: string;
  pickup: LocationSchedule;
  return: LocationSchedule;
  vehicleId: string;
  status: BookingStatus;
  totalAmount: number;
  depositPaid: boolean;
  paymentStatus: PaymentStatus;
  notes?: string;
}
