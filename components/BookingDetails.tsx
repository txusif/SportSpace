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

function priceAfterDiscount(price: number, discount: number) {
  return price - (price * discount) / 100;
}

const BookingDetails = ({
  turfId,
  date,
  time,
  totalPrice,
  handleTimeReset,
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

  if (isSoldOut) {
    return (
      <div>
        <TypographyMutedBold>
          <LuCalendarDays />
          {format(new Date(date), "EEEE, do MMMM yyyy")}
        </TypographyMutedBold>
        <TypographyH4>All the slots are sold out</TypographyH4>
      </div>
    );
  }

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
            <div className="flex gap-1.5">
              <TypographyH2>
                {priceAfterDiscount(totalPrice, discount)}
              </TypographyH2>

              {discount > 0 && (
                <TypographyMutedBold className="line-through">
                  {totalPrice}
                </TypographyMutedBold>
              )}
            </div>
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
