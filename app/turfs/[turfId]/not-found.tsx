import Link from "next/link";

import { TypographyH2 } from "@/components/typography/Typography";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-4">
      <TypographyH2>This turf could not be found :(</TypographyH2>
      <Link
        href="/turfs"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        Back to all turfs
      </Link>
    </div>
  );
}
