"use client";

import { useAuth } from "@/context/AuthContext";
import BookingDetails from "./BookingDetails";
import LoginMessage from "./LoginMessage";

const Booking = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginMessage />;
  }

  return <BookingDetails />;
};

export default Booking;
