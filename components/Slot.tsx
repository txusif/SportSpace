import { ReactElement } from "react";
import { TypographyMuted } from "./typography/Typography";
import { LuIndianRupee } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { useMediaQuery } from "@/hooks/use-media-query";

interface SlotProps {
  icon: ReactElement<IconType>;
  slotName: string;
  price: number;
  timeSlots: string[];
  bookedTime: string[];
  handleTimeSelect: (time: string) => void;
  time?: string;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setOpen: (open: boolean) => void;
}

const Slot = ({
  bookedTime,
  time,
  icon,
  slotName,
  price,
  timeSlots,
  handleTimeSelect,
  setTotalPrice,
  setOpen,
}: SlotProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
          <button
            disabled={bookedTime.includes(slot)}
            key={index}
            onClick={() => {
              handleTimeSelect(slot), setTotalPrice(price);
              !isDesktop && setOpen(true);
            }}
            className={`items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent flex justify-center h-8 disabled:opacity-50 disabled:bg-destructive disabled:text-destructive-foreground ${
              time?.includes(slot)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:text-primary"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slot;
