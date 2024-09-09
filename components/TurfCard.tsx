import { TurfProps } from "./TurfList";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import PriceBadge from "./PriceBadge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TurfCard = ({ turf }: { turf: TurfProps }) => {
  console.log(turf);
  return (
    <Card className="grid sm:grid-cols-1 lg:grid-cols-2 flex-1">
      <div className="relative max-lg:h-[200px]">
        <Image
          src={turf.image}
          alt={`Image of ${turf.name}`}
          fill
          className="object-cover max-lg:rounded-t-md lg:rounded-l-md"
        />
      </div>
      <div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{turf.name}</CardTitle>

            <Badge variant={"rating"}>
              <Star fill="yellow" size={18} strokeWidth={0} />
              <p className="">{turf.ratings}</p>
            </Badge>
          </div>
          <CardDescription className="pt-3">
            {turf.location.address}
          </CardDescription>
        </CardHeader>
        {/* <CardDescription>{turf.surfaceType}</CardDescription> */}
        <CardFooter className="flex justify-between">
          <PriceBadge turf={turf} />
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
