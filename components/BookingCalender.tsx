import { Calendar } from "./ui/calendar";

const BookingCalender = ({
  date,
  handleSelect,
}: {
  date: Date;
  handleSelect: (date: Date) => void;
}) => {
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      handleSelect(selectedDate);
    }
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleDateSelect}
      disableNavigation
      showOutsideDays
      disabled={(date) => date < new Date()}
      className="rounded-md md:border shadow w-max mx-auto"
    />
  );
};

export default BookingCalender;
