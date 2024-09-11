import Link from "next/link";
// import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography/Typography";
// import { redirect } from "next/navigation";
// import bgImage from "@/public/images/turf-background.jpg";
// import LoginButton from "@/components/LoginLogoutButton";

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
      {/* <LoginButton /> */}

      <div className="relative z-10 text-center space-y-4">
        <TypographyH1>Welcome to BookMyTurf</TypographyH1>

        <Link
          href="/turfs"
          className={buttonVariants({ variant: "default", size: "xl" })}
        >
          Explore turfs
        </Link>
      </div>
    </div>
  );
}
