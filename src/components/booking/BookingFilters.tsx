import { DatePicker, Select } from "antd";
import { Filter } from "lucide-react";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import { NoUndefinedRangeValueType } from "rc-picker/lib/PickerInput/RangePicker";
import { vehicles } from "~/mock-data/mockBookings";

const CustomRangePicker = DatePicker.generatePicker<Date>(
  dateFnsGenerateConfig
);

type SelectedRange = { from: Date | null; to: Date | null };

const { RangePicker } = CustomRangePicker;

interface BookingFiltersProps {
  selectedVehicles: string[];
  onVehiclesChange: (values: string[]) => void;
  selectedRange: SelectedRange | null;
  setSelectedRange: (range: SelectedRange | null) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export function BookingFilters({
  selectedVehicles,
  onVehiclesChange,
  selectedRange,
  setSelectedRange,
  statusFilter,
  setStatusFilter,
}: BookingFiltersProps) {
  const dateFilter: [Date | null, Date | null] | null = selectedRange
    ? [selectedRange.from, selectedRange.to]
    : null;

  const handleDatePickerChange = (
    dates: NoUndefinedRangeValueType<Date> | null
  ) => {
    if (dates) {
      const [from, to] = dates;

      setSelectedRange({ from, to });
      return;
    }

    setSelectedRange(dates);
  };

  const handleVehicleSelect = (values: string[]) => {
    onVehiclesChange(values);
  };

  const handleResetFilters = () => {
    setStatusFilter("all");
    onVehiclesChange(["all"]);
    setSelectedRange(null);
  };

  const showResetFilters =
    !!selectedRange ||
    statusFilter !== "all" ||
    selectedVehicles[0] !== "all" ||
    selectedVehicles.length > 1;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between h-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters</span>
            </div>
            {showResetFilters && (
              <div className="flex-end ">
                <button
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              mode="multiple"
              value={selectedVehicles}
              onChange={handleVehicleSelect}
              style={{ width: "100%" }}
              options={[
                { value: "all", label: "All" },
                ...vehicles.map((vehicle) => ({
                  value: vehicle.id,
                  label: vehicle.name,
                })),
              ]}
              maxTagCount="responsive"
            />
            <RangePicker
              value={dateFilter}
              onChange={handleDatePickerChange}
              style={{ width: "100%" }}
            />

            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: "100%" }}
              options={[
                { value: "all", label: "All Statuses" },
                { value: "ongoing", label: "Ongoing" },
                { value: "upcoming", label: "Upcoming" },
                { value: "completed", label: "Completed" },
                { value: "cancelled", label: "Cancelled" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
