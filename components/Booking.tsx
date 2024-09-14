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
  isSoldOut,
  discount,
}: {
  turfId: number;
  date: Date;
  time: string;
  totalPrice: number;
  handleTimeReset: () => void;
  isSoldOut: boolean;
  discount: number;
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
      isSoldOut={isSoldOut}
      discount={discount}
    />
  );
};

export default Booking;
