import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCalender from "./BookingCalender";
import TimeSlot from "./TimeSlot";
import { TurfProps } from "@/app/turfs/[turfId]/page";

const SelectSport = ({ prices }: { prices: TurfProps["prices"] }) => {
  return (
    <div>
      {/* <h2 className="text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Select Sport
      </h2> */}

      <Tabs defaultValue="cricket" className="sm:w-[400px] mt-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cricket">Cricket</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
        </TabsList>

        {/* <h2 className="mt-10 text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Select Date
        </h2> */}

        <TabsContent value="cricket">
          <Card className="w-max">
            <CardContent className="p-4 flex flex-col md:flex-row gap-6 md:gap-12">
              <BookingCalender />
              <TimeSlot prices={prices} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="football">
          <Card className="w-max">
            <CardContent className="p-4 flex flex-col md:flex-row gap-6 md:gap-12">
              <BookingCalender />
              <TimeSlot prices={prices} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelectSport;
