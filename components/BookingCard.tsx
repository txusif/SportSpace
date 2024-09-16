import { LuIndianRupee } from "react-icons/lu";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyMutedBold,
} from "./typography/Typography";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { getTurf } from "@/lib/data-turf";
import { Booking } from "@/app/account/bookings/page";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

const BookingCard = async ({ booking }: { booking: Booking }) => {
  const { created_at, date, turfPrice, time } = booking;

  const turf = await getTurf(booking.turfId);
  const { images, name }: { images: string[]; name: string } = turf;

  return (
    <Card>
      <CardContent className="p-0 flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        {/* Image */}
        <div className="relative aspect-video h-36 md:h-24 lg:h-36">
          <Image
            src={images[0]}
            alt="Booking"
            fill
            className="object-cover max-sm:rounded-t-md md:rounded-l-md"
          />
          <div className="md:hidden absolute top-1 right-1">
            {isPast(new Date(date)) ? (
              <Badge
                variant={"destructive"}
                className="w-max px-3 py-1.5 uppercase"
              >
                past
              </Badge>
            ) : (
              <Badge
                variant={"default"}
                className="w-max px-3 py-1.5 uppercase"
              >
                upcoming
              </Badge>
            )}
          </div>
        </div>

        {/* Booking details */}
        <div className="px-4 md:px-0 py-2 md:py-0 xl:py-4 flex flex-col justify-between relative">
          <TypographyH2>{name}</TypographyH2>

          <TypographyMutedBold>
            {format(new Date(date), "EEE, MMM dd yyyy")} (
            {isToday(new Date(`${date} ${time.split("-")[0]}`))
              ? "Today"
              : formatDistanceFromNow(
                  new Date(`${date} ${time.split("-")[0]}`).toISOString()
                )}
            )
          </TypographyMutedBold>

          <div className="mt-2 md:mt-0">
            <Badge variant={"secondary"} className="w-max">
              {time}
            </Badge>
          </div>
        </div>

        {/* Status */}
        <div className="px-4 md:px-0 flex flex-col md:items-end justify-between gap-1 md:gap-0 py-1 xl:py-4">
          <div className="hidden md:block">
            {isPast(new Date(date)) ? (
              <Badge
                variant={"destructive"}
                className="w-max px-3 py-1.5 uppercase"
              >
                past
              </Badge>
            ) : (
              <Badge
                variant={"default"}
                className="w-max px-3 py-1.5 uppercase"
              >
                upcoming
              </Badge>
            )}
          </div>

          <div className="text-primary flex items-center">
            <LuIndianRupee size={24} />
            <TypographyH4>{turfPrice}</TypographyH4>
          </div>

          <TypographyMutedBold>
            Booked {format(new Date(created_at), "EEE, dd MMM yyyy, p")}
          </TypographyMutedBold>
        </div>

        {/* Actions */}
        <div className="flex flex-row md:flex-col max-sm:justify-between md:justify-center divide-x md:divide-y md:border-l md:w-28 text-muted-foreground ">
          {!isPast(new Date(`${date} + ${time.split("-")[0]}`)) ? (
            <>
              <div className="max-sm:border-t flex justify-center items-center max-sm:w-full h-full">
                <Button variant={"ghost"} className="uppercase space-x-1.5">
                  <HiPencilSquare size={18} />
                  <span>Edit</span>
                </Button>
              </div>
              <div className="max-sm:border-t flex justify-center items-center max-sm:w-full h-full">
                <Button variant={"ghost"} className="uppercase space-x-1.5">
                  <HiTrash size={18} />
                  <span>Delete</span>
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
