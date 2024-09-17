"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import TimeSlot from "./TimeSlot";
import BookingCalender from "./BookingCalender";
import Booking from "./Booking";
import { TurfProps } from "@/app/turfs/[turfId]/page";
import { format } from "date-fns";
import { TypographyH2 } from "./typography/Typography";
import BookingDrawer from "./BookingDrawer";

const BookingForm = ({
  turf,
  bookedSlots,
}: {
  turf: TurfProps;
  bookedSlots: { date: string; time: string }[];
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const bookedSlotsByDate = bookedSlots.filter(
    (slot) => slot.date === format(selectedDate, "yyyy-MM-dd")
  );

  const isSoldOut = bookedSlotsByDate.map((slot) => slot.time).length === 15;

  function handleTimeSelect(time: string) {
    setSelectedTime((prev) => {
      if (prev === time) {
        setPrice(0);
        return "";
      }
      return time;
    });
  }

  function handleClearTime() {
    setSelectedTime("");
    setPrice(0);
    setOpen(false);
  }

  return (
    <div className="mt-10">
      <TypographyH2 className="text-primary">Book Your Slot</TypographyH2>

      <div className="flex flex-col lg:flex-row gap-6 mt-2">
        <div>
          <Card className="w-max">
            <CardContent className="p-4 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Calender */}
              <BookingCalender
                date={selectedDate}
                handleSelect={setSelectedDate}
              />
              {/* Time slot */}
              <TimeSlot
                bookedSlots={bookedSlotsByDate}
                prices={turf.prices}
                time={selectedTime}
                handleTimeSelect={handleTimeSelect}
                setTotalPrice={setPrice}
                setOpen={setOpen}
              />
            </CardContent>
          </Card>
        </div>

        {/* Booking details */}
        <Card className="hidden lg:flex grow">
          <CardContent className="p-4 flex w-full justify-center items-center">
            <Booking
              date={selectedDate}
              time={selectedTime}
              handleTimeReset={handleClearTime}
              totalPrice={price}
              turfId={turf.id}
              isSoldOut={isSoldOut}
              discount={turf.discount}
            />
          </CardContent>
        </Card>

        <div className="lg:hidden">
          <BookingDrawer
            date={selectedDate}
            time={selectedTime}
            handleTimeReset={handleClearTime}
            totalPrice={price}
            turfId={turf.id}
            isSoldOut={isSoldOut}
            discount={turf.discount}
            open={open}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
