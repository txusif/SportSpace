import Link from "next/link";
import {
  TypographyH2,
  TypographyH4,
  TypographyMutedBold,
} from "./typography/Typography";
import { LuCalendarDays, LuClock, LuHash, LuIndianRupee } from "react-icons/lu";
import { Button, buttonVariants } from "./ui/button";
import { format } from "date-fns";
import { createBookingAction } from "@/lib/booking-actions";
import SubmitButton from "./SubmitButton";

const BookingDetails = ({
  turfId,
  date,
  time,
  totalPrice,
  handleTimeReset,
}: {
  turfId: number;
  date: Date;
  time: string;
  totalPrice: number;
  handleTimeReset: () => void;
}) => {
  const bookingData = {
    date: format(new Date(date), "yyyy-MM-dd"),
    time: time,
    turfPrice: totalPrice,
    turfId: turfId,
  };

  const formData = new FormData();
  formData.append("date", bookingData.date);
  formData.append("time", bookingData.time);
  formData.append("turfPrice", bookingData.turfPrice.toString());
  formData.append("turfId", bookingData.turfId.toString());

  const createBookingWithData = createBookingAction.bind(null, formData);

  return (
    <form
      action={async () => {
        await createBookingWithData();
        // handleTimeReset();
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <TypographyMutedBold>
          <LuCalendarDays />
          Booking date
        </TypographyMutedBold>
        <TypographyH4>
          {format(new Date(date), "EEEE, do MMMM yyyy")}
        </TypographyH4>
      </div>

      {time ? (
        <div>
          <TypographyMutedBold>
            <LuClock />
            Booking Time
          </TypographyMutedBold>
          <TypographyH4>{time}</TypographyH4>
        </div>
      ) : null}

      {totalPrice ? (
        <div className="flex justify-between flex-wrap items-center">
          <div>
            <TypographyMutedBold>
              <LuIndianRupee />
              Total
            </TypographyMutedBold>
            <TypographyH2>{totalPrice}</TypographyH2>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleTimeReset} variant={"outline"}>
              Clear
            </Button>
            {/* <Link
              href="/checkout"
              className={buttonVariants({ variant: "default" })}
            > */}
            <SubmitButton>Proceed</SubmitButton>
            {/* </Link> */}
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default BookingDetails;
