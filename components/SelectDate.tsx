"use client";

import { BookedSlot, TurfProps } from "@/app/turfs/[turfId]/page";
import BookingCalender from "./BookingCalender";
import TimeSlot from "./TimeSlot";
import { useState } from "react";

const SelectDate = ({
  turf,
  bookedSlots,
}: {
  turf: TurfProps;
  bookedSlots: BookedSlot[];
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  return (
    <>
      {/* Calender */}
      <BookingCalender date={selectedDate} handleSelect={setSelectedDate} />
      {/* Time slot */}
      <TimeSlot date={selectedDate} bookedSlots={bookedSlots} prices={turf.prices} />
    </>
  );
};

export default SelectDate;
