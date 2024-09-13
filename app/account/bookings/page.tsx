import {
  TypographyH3,
  TypographyMutedBold,
} from "@/components/typography/Typography";
import { getUserBookings } from "@/lib/data-bookings";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";

export const metadata: Metadata = {
  title: "Bookings",
};

export interface Booking {
  id: number;
  created_at: string;
  date: string;
  time: string;
  turfPrice: number;
  isPaid: boolean;
  status: string;
  bookedBy: string;
  turfId: number;
}

export default async function Bookings() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const id = data!.user!.id;

  const bookings: Booking[] = await getUserBookings(id);

  if (!bookings.length) {
    return (
      <div className="space-y-1">
        <TypographyH3>You have no booking</TypographyH3>
        <TypographyMutedBold>
          You can start booking{" "}
          <Link href="/turfs" className="underline text-primary">
            here
          </Link>
        </TypographyMutedBold>
      </div>
    );
  }

  return (
    <div>
      <TypographyH3>Your bookings ({bookings.length})</TypographyH3>
      <div className="mt-6 flex flex-col gap-8 md:gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
