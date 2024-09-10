import { ReactElement } from "react";
import { TypographyMuted } from "./typography/Typography";
import { LuIndianRupee } from "react-icons/lu";
import { Badge } from "./ui/badge";
import { IconType } from "react-icons/lib";

interface SlotProps {
  icon: ReactElement<IconType>;
  slotName: string;
  price: number;
  timeSlots: string[];
}

const Slot = ({ icon, slotName, price, timeSlots }: SlotProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <TypographyMuted>
        <span className="flex items-center gap-2">
          {icon}
          {slotName}
          <span className="flex items-center text-primary font-medium">
            (<LuIndianRupee />
            {price})
          </span>
        </span>
      </TypographyMuted>
      <div
        className={`grid grid-cols-[8rem_8rem] gap-3 ${
          timeSlots.length === 3
            ? "lg:grid-cols-[8rem_8rem_8rem]"
            : "lg:grid-cols-[6rem_6rem_6rem_6rem]"
        }`}
      >
        {timeSlots.map((slot, index) => (
          <Badge key={index} variant="timeSlot">
            {slot}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Slot;
