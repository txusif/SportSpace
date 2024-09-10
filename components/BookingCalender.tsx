"use client";

import { useState } from "react";
import { Calendar } from "./ui/calendar";

const BookingCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disableNavigation
      showOutsideDays
      disabled={(date) => date < new Date()}
      className="rounded-md md:border shadow w-max mx-auto"
    />
  );
};

export default BookingCalender;
