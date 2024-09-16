import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  // DrawerTrigger,
} from "@/components/ui/drawer";
import SubmitButton from "./SubmitButton";
import {
  TypographyH2,
  TypographyH4,
  TypographyMutedBold,
} from "./typography/Typography";
import { LuCalendarDays, LuClock, LuIndianRupee } from "react-icons/lu";
import { priceAfterDiscount } from "./BookingDetails";
import { format } from "date-fns";
import { createBookingAction } from "@/lib/booking-actions";

const BookingDrawer = ({
  turfId,
  date,
  time,
  totalPrice,
  handleTimeReset,
  // isSoldOut,
  discount,
  open,
}: {
  turfId: number;
  date: Date;
  time: string;
  totalPrice: number;
  handleTimeReset: () => void;
  isSoldOut: boolean;
  discount: number;
  open: boolean;
}) => {
  const bookingData = {
    date: format(new Date(date), "yyyy-MM-dd"),
    time: time,
    turfPrice: totalPrice,
    turfId: turfId,
  };

  const formData = new FormData();
  formData.append("date", bookingData.date);
  formData.append("time", bookingData.time);
  formData.append("turfPrice", bookingData.turfPrice.toString());
  formData.append("turfId", bookingData.turfId.toString());

  const createBookingWithData = createBookingAction.bind(null, formData);

  return (
    <Drawer open={open}>
      {/* <DrawerTrigger asChild>
        {time ? <Button variant="outline">Open Drawer</Button> : null}
      </DrawerTrigger> */}
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <form
            action={async () => {
              await createBookingWithData();
              // handleTimeReset();
            }}
            className="flex flex-col gap-1"
          >
            <DrawerHeader className="gap-0 pb-2">
              <DrawerTitle>
                <TypographyMutedBold className="flex justify-center gap-1.5">
                  <LuCalendarDays />
                  <span> Booking date</span>
                </TypographyMutedBold>
              </DrawerTitle>

              <DrawerDescription>
                <TypographyH4 className="text-white text-center">
                  {format(new Date(date), "EEEE, do MMMM yyyy")}
                </TypographyH4>
              </DrawerDescription>
            </DrawerHeader>

            {time ? (
              <DrawerHeader className="gap-0 p-2">
                <DrawerTitle>
                  <TypographyMutedBold className="flex justify-center gap-1.5">
                    <LuClock />
                    Booking Time
                  </TypographyMutedBold>
                </DrawerTitle>
                <DrawerDescription>
                  <TypographyH4 className="text-white text-center">
                    {time}
                  </TypographyH4>
                </DrawerDescription>
              </DrawerHeader>
            ) : null}

            {totalPrice ? (
              <DrawerHeader className="gap-0 p-2">
                <DrawerTitle>
                  <TypographyMutedBold className="flex justify-center gap-1.5">
                    <LuIndianRupee />
                    Total
                  </TypographyMutedBold>
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex justify-center gap-1.5 text-white">
                    <TypographyH2>
                      {priceAfterDiscount(totalPrice, discount)}
                    </TypographyH2>

                    {discount > 0 && (
                      <TypographyMutedBold className="line-through">
                        {totalPrice}
                      </TypographyMutedBold>
                    )}
                  </div>
                </DrawerDescription>
              </DrawerHeader>
            ) : null}

            <DrawerFooter className="pt-2">
              <SubmitButton>Proceed</SubmitButton>
              <DrawerClose asChild>
                <Button variant="outline" onClick={handleTimeReset}>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
