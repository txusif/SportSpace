import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import bgImage from "@/public/images/turf-background.jpg";

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

      <div className="relative z-10 text-center">
        <h1 className="mb-8 text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:mb-10 lg:text-7xl">
          Welcome to BookMyTurf
        </h1>

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
