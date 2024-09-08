import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-6">
      <h1 className="text-xl font-semibold lg:text-3xl">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        Go back home
      </Link>
    </div>
  );
}
