import Link from "next/link";
import {
  TypographyH2,
  TypographyH4,
  TypographyMutedBold,
} from "./typography/Typography";
import { LuCalendarDays, LuClock, LuHash, LuIndianRupee } from "react-icons/lu";
import { buttonVariants } from "./ui/button";

const BookingDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <TypographyMutedBold>
          <LuCalendarDays />
          Booking date
        </TypographyMutedBold>
        <TypographyH4>Wednesday, 11th September 2024</TypographyH4>
      </div>
      <div>
        <TypographyMutedBold>
          <LuClock />
          Booking Time
        </TypographyMutedBold>
        <TypographyH4>17:00 &mdash; 18:00</TypographyH4>
      </div>
      <div>
        <TypographyMutedBold>
          <LuHash />
          Number of Slots
        </TypographyMutedBold>
        <TypographyH4>1</TypographyH4>
      </div>
      <div className="flex justify-between flex-wrap items-center">
        <div>
          <TypographyMutedBold>
            <LuIndianRupee />
            Total
          </TypographyMutedBold>
          <TypographyH2>900</TypographyH2>
        </div>
        <Link
          href="/checkout"
          className={buttonVariants({ variant: "default" })}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default BookingDetails;
