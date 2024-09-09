import { getTurf, getTurfs } from "@/lib/data-turf";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import {
  TypographyH1,
  TypographyMuted,
} from "@/components/typography/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";
import SelectSport from "@/components/SelectSport";
import BookingCalender from "@/components/BookingCalender";
import Rules from "@/components/Rules";
import Reviews from "@/components/Reviews";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { turfId: string };
}) {
  const turf = await getTurf(Number(params.turfId));
  const { name } = turf;
  return { title: name };
}

export async function generateStaticParams() {
  const turfs = await getTurfs();
  const ids = turfs.map((turf) => ({ turfId: String(turf.id) }));
  return ids;
}

export interface TurfProps {
  id: number;
  created_at: string;
  name: string;
  description: string;
  images: string[];
  amenities: string;
  football: boolean;
  cricket: boolean;
  rules: string;
  dayPrice: number;
  nightPrice: number;
  discount: number;
  ratings: number;
  location: {
    address: string;
    mapLink: string;
  };
  price: number;
  contactInfo: { phone: string; email: string };
  availability: { openTime: string; closeTime: string };
  surfaceType: string;
}

export default async function Turf({
  params: { turfId },
}: {
  params: { turfId: string };
}) {
  const turf: TurfProps = await getTurf(Number(turfId));

  return (
    <div>
      <Card className="grid sm:grid-cols-1 lg:grid-cols-2 flex-1 h-max">
        <ImageCarousel images={turf.images} />

        <div>
          <CardHeader>
            <div className="flex items-start justify-between">
              {/* <CardTitle>{turf.name}</CardTitle> */}
              <TypographyH1>{turf.name}</TypographyH1>

              <Badge variant={"rating"}>
                <Star fill="yellow" size={18} strokeWidth={0} />
                <p className="">{turf.ratings}</p>
              </Badge>
            </div>
            <CardDescription className="pt-2">
              {turf.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col">
              <p className="font-semibold mb-2 text-base text-muted-foreground">
                Amenities
              </p>
              <div className="grid grid-cols-[8rem_1fr] gap-2">
                {turf.amenities.split(",").map((amenity, i) => (
                  <Badge key={i} className="w-max" variant={"secondary"}>
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col lg:flex-row justify-start lg:justify-between gap-3 items-start lg:items-center">
            <TypographyMuted>{turf.location.address}</TypographyMuted>
            <a
              href={turf.location.mapLink}
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 max-lg:ml-auto"
            >
              Map view
            </a>
          </CardFooter>
        </div>
      </Card>

      <Rules rules={turf.rules} />

      {turf.football && turf.cricket ? (
        <SelectSport />
      ) : (
        <div className="mt-10 sm:w-[400px]">
          <h2 className="mt-6 text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Select Time Slot
          </h2>
          <Card className="mt-2">
            <CardHeader>
              <CardTitle>Book slot for your next cricket match</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <BookingCalender />
            </CardContent>
          </Card>
        </div>
      )}

      <Reviews />
    </div>
  );
}
