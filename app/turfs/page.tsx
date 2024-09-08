import Filter from "@/components/Filter";
import TurfList from "@/components/TurfList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Turfs",
};

export default function TurfsPage({
  searchParams,
}: {
  searchParams: {
    sport?: string;
  };
}) {
  const filter = searchParams?.sport ?? "all";

  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-medium mb-4 lg:mb-5">
        Book Your Turf, Play Your Game!
      </h1>

      <p className="mb-10 text-base md:text-lg">
        Premium turfs in prime locations, perfect for every game. Imagine
        stepping onto lush fields, surrounded by greenery, ready for action.
        From casual matches to big games, your best moments start here. Welcome
        to your ultimate play space.
      </p>

      <div className="mb-8 flex justify-end gap-1.5">
        <Filter />
      </div>

      <Suspense fallback={<div>Loding</div>} key={filter}>
        <TurfList filter={filter} />
      </Suspense>
    </div>
  );
}
