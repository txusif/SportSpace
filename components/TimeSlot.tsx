import { Card, CardContent } from "./ui/card";
import {
  BsFillSunriseFill,
  BsFillSunFill,
  BsFillSunsetFill,
  BsFillMoonFill,
} from "react-icons/bs";
import Slot from "./Slot";
import { BookedSlot, TurfProps } from "@/app/turfs/[turfId]/page";

const TimeSlot = ({
  // date,
  time,
  bookedSlots,
  prices,
  handleTimeSelect,
  setTotalPrice,
  setOpen,
}: {
  // date: Date;
  time: string;
  bookedSlots: BookedSlot[];
  prices: TurfProps["prices"];
  handleTimeSelect: (time: string) => void;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setOpen: (open: boolean) => void;
}) => {
  const bookedTimes = bookedSlots.map((slot) => slot.time);

  return (
    <Card className="rounded-md shadow">
      <CardContent className="p-3 flex flex-col gap-4">
        <Slot
          icon={<BsFillSunriseFill />}
          slotName="Morning slot"
          price={prices.morningPrice}
          timeSlots={[
            "7:00 - 8:00",
            "8:00 - 9:00",
            "9:00 - 10:00",
            "10:00 - 11:00",
          ]}
          time={time}
          bookedTime={bookedTimes}
          handleTimeSelect={handleTimeSelect}
          setTotalPrice={setTotalPrice}
          setOpen={setOpen}
        />
        <Slot
          icon={<BsFillSunFill />}
          slotName="Afternoon slot"
          price={prices.morningPrice}
          timeSlots={[
            "12:00 - 13:00",
            "13:00 - 14:00",
            "14:00 - 15:00",
            "15:00 - 16:00",
          ]}
          time={time}
          bookedTime={bookedTimes}
          handleTimeSelect={handleTimeSelect}
          setTotalPrice={setTotalPrice}
          setOpen={setOpen}
        />

        <Slot
          icon={<BsFillSunsetFill />}
          slotName="Evening slot"
          price={prices.eveningPrice}
          timeSlots={["17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"]}
          time={time}
          bookedTime={bookedTimes}
          handleTimeSelect={handleTimeSelect}
          setTotalPrice={setTotalPrice}
          setOpen={setOpen}
        />

        <Slot
          icon={<BsFillMoonFill />}
          slotName="Night slot"
          price={prices.nightPrice}
          timeSlots={[
            "20:00 - 21:00",
            "21:00 - 22:00",
            "22:00 - 23:00",
            "23:00 - 00:00",
          ]}
          time={time}
          bookedTime={bookedTimes}
          handleTimeSelect={handleTimeSelect}
          setTotalPrice={setTotalPrice}
          setOpen={setOpen}
        />
      </CardContent>
    </Card>
  );
};

export default TimeSlot;
