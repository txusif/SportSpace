import Link from "next/link";
// import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { TypographyH1, TypographyH4 } from "@/components/typography/Typography";
// import bgImage from "@/public/images/football-group-10b.jpeg";

export default function HomePage() {
  return (
    <div className="mt-28 lg:mt-24">
      {/* <Image
        src={bgImage}
        fill
        quality={100}
        placeholder="blur"
        alt="Turf background image"
        className="object-cover object-center opacity-90"
      /> */}

      <div className="relative z-10 text-center space-y-2">
        <TypographyH1 className="text-2xl">Welcome to SportSpace</TypographyH1>
        <TypographyH4 className="max-sm:text-base">
          Book Cricket and Football Turfs Effortlessly.
        </TypographyH4>

        <Link
          href="/turfs"
          className={buttonVariants({ variant: "default", size: "xl" })}
        >
          Find Your Turf Now
        </Link>
      </div>
    </div>
  );
}
