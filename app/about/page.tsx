import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import aboutFootball from "@/public/images/aboutFootball.jpg";
import aboutTennis from "@/public/images/aboutTennis.jpg";
import { buttonVariants } from "@/components/ui/button";
import { TypographyP } from "@/components/typography/Typography";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-y-5 lg:grid lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32">
      <div className="col-span-3 order-2 lg:order-none">
        <h1 className="text-2xl font-medium text-primary mb-3 lg:mb-10 lg:text-4xl">
          Welcome to BookMyTurf
        </h1>
        <div className="space-y-4">
          <TypographyP>
            Discover vibrant, top-quality turfs designed to elevate your game.
            Nestled in prime locations, our turfs offer the perfect blend of
            convenience and premium experience, catering to players of all
            levels. Whether it&apos;s a friendly match or a competitive
            showdown, we&apos;ve got the perfect spot waiting for you.
          </TypographyP>
          <TypographyP>
            Our platform makes booking your ideal turf a breeze. No more
            searching through endless options—just pick, book, and play. With
            real-time availability and exclusive deals, the field is always
            ready for you to take control and enjoy the game to its fullest.
          </TypographyP>
          <TypographyP>
            Join us and transform your play sessions into memorable moments,
            filled with action and excitement. From the first whistle to the
            final goal, your perfect game starts here.
          </TypographyP>
        </div>
      </div>

      <div className="col-span-2 order-1 lg:order-none">
        <Image
          src={aboutFootball}
          alt="Turf image 1"
          quality={100}
          placeholder="blur"
          className="rounded-md"
        />
      </div>

      <div className="col-span-2 order-3 lg:order-none mt-10 lg:mt-0">
        <Image
          src={aboutTennis}
          alt="Turf image 2"
          quality={100}
          placeholder="blur"
          className="rounded-md"
        />
      </div>

      <div className="col-span-3 order-4 lg:order-none">
        <h1 className="text-2xl font-medium text-primary mb-3 lg:mb-10 lg:text-4xl">
          Committed to Excellence Since Day One
        </h1>
        <div className="space-y-4">
          <TypographyP>
            Since our inception, we&apos;ve been dedicated to providing a
            seamless turf booking experience that brings people together through
            the love of the game. Our commitment is to quality, convenience, and
            community—ensuring that every booking feels like a win.
          </TypographyP>
          <TypographyP>
            With a passionate team behind every turf, we strive to maintain the
            highest standards and continuously enhance our offerings. Because
            here, you&apos;re not just booking a turf; you&apos;re joining a
            community of sports enthusiasts who share the same passion for play.
            Step onto our fields and feel the difference.
          </TypographyP>
          <div>
            <Link
              href="/turfs"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Explore our turfs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
