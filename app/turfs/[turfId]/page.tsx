import { getTurf, getTurfs } from "@/lib/data-turf";

import { Badge } from "@/components/ui/badge";
import { LuMapPin, LuStar } from "react-icons/lu";
import { TypographyH1 } from "@/components/typography/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";
import Rules from "@/components/Rules";
import Reviews from "@/components/Reviews";

import { getBookedSlotsByTurfId } from "@/lib/data-bookings";
import BookingForm from "@/components/BookingForm";

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
  prices: {
    morningPrice: number;
    eveningPrice: number;
    nightPrice: number;
  };
  discount: number;
  rating: number;
  location: {
    address: string;
    mapLink: string;
  };

  contactInfo: { phone: string; email: string };
  availability: { openTime: string; closeTime: string };
  surfaceType: string;
}

export interface BookedSlot {
  date: string;
  time: string;
}

export default async function Turf({
  params: { turfId },
}: {
  params: { turfId: string };
}) {
  const turf: TurfProps = await getTurf(Number(turfId));

  const bookings = await getBookedSlotsByTurfId(Number(turfId));

  return (
    <div>
      <Card className="grid sm:grid-cols-1 lg:grid-cols-2 flex-1 h-max">
        <ImageCarousel images={turf.images} />

        <div>
          <CardHeader>
            <div className="flex items-start justify-between">
              {/* <CardTitle>{turf.name}</CardTitle> */}
              <TypographyH1>
                {turf.name}
                {/* ({bookedSlots.length}) */}
              </TypographyH1>

              <Badge variant={"rating"}>
                <LuStar fill="yellow" size={18} strokeWidth={0} />
                <p className="">{turf.rating}</p>
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
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[8rem_8rem_8rem] gap-2">
                {turf.amenities.split(",").map((amenity, i) => (
                  <Badge key={i} className="w-max" variant={"secondary"}>
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-1.5">
              <LuMapPin size={20} className="text-muted-foreground" />
              <p className="tetxt-sm">{turf.location.address}</p>
            </div>
            <a
              href={turf.location.mapLink}
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ml-6"
            >
              Map view
            </a>
          </CardFooter>
        </div>
      </Card>

      {/* Rules */}
      <Rules rules={turf.rules} />

      {/* Booking */}
      <BookingForm turf={turf} bookedSlots={bookings} />

      {/* Reviews */}
      <Reviews />
    </div>
  );
}
