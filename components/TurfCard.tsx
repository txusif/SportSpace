import { TurfProps } from "./TurfList";

import Image from "next/image";
import { LuStar } from "react-icons/lu";
import { Badge } from "./ui/badge";
import Link from "next/link";
import PriceBadge from "./PriceBadge";

import { buttonVariants } from "@/components/ui/button";
import { TypographyH4 } from "./typography/Typography";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const TurfCard = ({ turf }: { turf: TurfProps }) => {
  return (
    <Card className="grid sm:grid-cols-1 lg:grid-cols-2 flex-1">
      <div className="relative max-lg:h-[200px]">
        <Image
          src={turf.images[0]}
          alt={`Image of ${turf.name}`}
          fill
          className="object-cover max-lg:rounded-t-md lg:rounded-l-md"
        />
        {turf.discount > 0 && (
          <Badge className="absolute uppercase right-1 top-1 font-semibold text-sm">
            {turf.discount} &#37; off
          </Badge>
        )}
      </div>
      <div>
        <CardHeader>
          <div className="flex items-center justify-between">
            {/* <CardTitle>{turf.name}</CardTitle>*/}
            <TypographyH4>{turf.name}</TypographyH4>

            <Badge variant={"rating"}>
              <LuStar fill="yellow" size={18} strokeWidth={0} />
              <p className="">{turf.rating}</p>
            </Badge>
          </div>
          <CardDescription className="pt-3">
            {turf.location.address}
          </CardDescription>
        </CardHeader>
        {/* <CardDescription>{turf.surfaceType}</CardDescription> */}
        <CardFooter className="flex justify-between">
          <PriceBadge prices={turf.prices} />

          <Link
            href={`/turfs/${turf.id}`}
            className={buttonVariants({ variant: "default" })}
          >
            Book now
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default TurfCard;
