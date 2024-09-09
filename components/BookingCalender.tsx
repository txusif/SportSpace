"use client";

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCalender = () => {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time: any) => {
    return time.getHours() > 12 ? "text-green-400" : "text-red-400";
  };

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => date && setStartDate(date)}
      startDate={startDate}
      showTimeSelect
      closeOnScroll={true}
      dateFormat="MMMM d, yyyy h:mm aa"
      timeClassName={handleColor}
      filterTime={filterPassedTime}
      //   excludeDates={[
      //     { date: subDays(new Date(), 1), message: "This day is excluded" },
      //   ]}
      //   isClearable={true}
    />
  );
};

export default BookingCalender;
