"use client";

import type { Booking } from "@/services/bookings/bookings.types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";

interface BookingListProps {
  bookings: Booking[];
  onSelectBooking?: (booking: Booking) => void;
}

const columnHelper = createColumnHelper<Booking>();

export function BookingList({ bookings, onSelectBooking }: BookingListProps) {
  const paymentStatusColors = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    overdue: "bg-red-100 text-red-800",
    unpaid: "bg-red-100 text-red-800",
    partial: "bg-blue-100 text-blue-800",
  };

  const columns = [
    columnHelper.accessor("id", {
      header: "Booking ID",
      cell: (info) => <span className="font-mono">{info.getValue()}</span>,
    }),
    columnHelper.accessor("customerId", {
      header: "Customer",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("pickup.date", {
      header: "Start Date",
      cell: (info) => format(info.getValue(), "MMM dd, yyyy"),
    }),
    columnHelper.accessor("return.date", {
      header: "End Date",
      cell: (info) => format(info.getValue(), "MMM dd, yyyy"),
    }),
    columnHelper.accessor("paymentStatus", {
      header: "Payment",
      cell: (info) => {
        const paymentStatus = info.getValue();
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
              paymentStatusColors[
                paymentStatus as keyof typeof paymentStatusColors
              ]
            }`}
          >
            {paymentStatus}
          </span>
        );
      },
    }),

    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        return (
          <span className="flex items-center gap-1">
            {status === "ongoing" && (
              <span className="text-green-600">Ongoing</span>
            )}
            {status !== "ongoing" && (
              <span className="capitalize">{status}</span>
            )}
          </span>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: bookings,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectBooking(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
