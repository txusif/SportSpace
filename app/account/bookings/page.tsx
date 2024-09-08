import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings",
};

export default function Bookings() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-7">Your bookings</h2>
    </div>
  );
}
