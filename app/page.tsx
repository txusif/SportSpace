import Link from "next/link";
// import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography/Typography";
// import bgImage from "@/public/images/turf-background.jpg";

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

      <div className="relative z-10 text-center space-y-4">
        <TypographyH1>Welcome to BookMyTurf</TypographyH1>

        <Link
          href="/turfs"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Explore turfs
        </Link>
      </div>
    </div>
  );
}
