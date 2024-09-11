import { getUserBookings } from "@/lib/data-bookings";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings",
};

export default async function Bookings() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const id = data!.user!.id;

  const bookings = await getUserBookings(id);
  console.log(bookings);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-7">
        Your bookings ({bookings.length})
      </h2>
    </div>
  );
}
