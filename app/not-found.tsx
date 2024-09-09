import Link from "next/link";

import { TypographyH2 } from "@/components/typography/Typography";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-4">
      <TypographyH2>This page could not be found :(</TypographyH2>

      <Link
        href="/"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        Go back home
      </Link>
    </div>
  );
}
