import { TypographyH2 } from "@/components/typography/Typography";
import Link from "next/link";

export default function page() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-4">
      <TypographyH2>Thank you for your booking</TypographyH2>

      <Link
        href="/account/bookings"
        className="text-primary text-lg lg:text-xl underline"
      >
        Manage your bookings &rarr;
      </Link>
    </div>
  );
}
