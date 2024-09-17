import { Suspense } from "react";
import { Metadata } from "next";

import Filter from "@/components/Filter";
import Spinner from "@/components/Spinner";
import TurfList from "@/components/TurfList";
import { TypographyH2, TypographyP } from "@/components/typography/Typography";

export const metadata: Metadata = {
  title: "Turfs",
};

// export const revalidate = 0; // 0 seconds ie no revalidation
// export const revalidate = 3600; // 1 hour

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
      <TypographyH2>Book Your Turf, Play Your Game!</TypographyH2>

      <TypographyP>
        Premium turfs in prime locations, perfect for every game. Imagine
        stepping onto lush fields, surrounded by greenery, ready for action.
        From casual matches to big games, your best moments start here. Welcome
        to your ultimate play space.
      </TypographyP>

      <div className="my-8 flex justify-end gap-1.5">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <TurfList filter={filter} />
      </Suspense>
    </div>
  );
}
