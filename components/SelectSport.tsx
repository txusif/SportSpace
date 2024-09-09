import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCalender from "./BookingCalender";

const SelectSport = () => {
  return (
    <div className="mt-10">
      <h2 className="text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Select Sport
      </h2>

      <Tabs defaultValue="cricket" className="sm:w-[400px] mt-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cricket">Cricket</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
        </TabsList>

        <h2 className="mt-6 text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Select Time Slot
        </h2>

        <TabsContent value="cricket">
          <Card>
            <CardHeader>
              <CardTitle>Book slot for your next cricket match</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <BookingCalender />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="football">
          <Card>
            <CardHeader>
              <CardTitle>Book slot for your next football match</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <BookingCalender />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelectSport;
