"use client";

import { useAuth } from "@/context/AuthContext";
import BookingDetails from "./BookingDetails";
import LoginMessage from "./LoginMessage";

const Booking = ({
  turfId,
  date,
  time,
  handleTimeReset,
  totalPrice,
}: {
  turfId: number;
  date: Date;
  time: string;
  totalPrice: number;
  handleTimeReset: () => void;
}) => {
  const { user } = useAuth();

  if (!user) {
    return <LoginMessage />;
  }

  return (
    <BookingDetails
    turfId={turfId}
      date={date}
      time={time}
      totalPrice={totalPrice}
      handleTimeReset={handleTimeReset}
    />
  );
};

export default Booking;
