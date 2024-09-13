import { Calendar } from "./ui/calendar";

const BookingCalender = ({
  date,
  isSoldOut,
  handleSelect,
}: {
  date: Date;
  isSoldOut: boolean;
  handleSelect: any;
}) => {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleSelect}
      disableNavigation
      showOutsideDays
      disabled={(date) => date < new Date() }
      className="rounded-md md:border shadow w-max mx-auto"
    />
  );
};

export default BookingCalender;
