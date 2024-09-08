import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-6">
      <h1 className="text-xl font-semibold lg:text-3xl">
        This turf could not be found :(
      </h1>
      <Link
        href="/turfs"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        Back to all turfs
      </Link>
    </div>
  );
}
