import {
  TypographyH3,
  TypographyMutedBold,
} from "@/components/typography/Typography";
import { getBooking } from "@/lib/data-bookings";
import { getProfile } from "@/lib/data-profile";

export default async function EditBooking({
  params: { bookingId },
}: {
  params: { bookingId: string };
}) {
  const booking = await getBooking(Number(bookingId));

  const bookedBy = await getProfile(booking.bookedBy);

  return (
    <div>
      <TypographyMutedBold>
        Edit Booking id &mdash; {booking.id}
      </TypographyMutedBold>

      <TypographyMutedBold>
        Name &mdash; {bookedBy.full_name}
      </TypographyMutedBold>
    </div>
  );
}
