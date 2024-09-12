"use client";

import { Card, CardContent } from "./ui/card";

const UpdateAvatar = () => {
  return (
    <Card className="w-80 hidden lg:block">
      <CardContent className="p-6">
        {/* <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="full_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  </Form> */}
        UpdateAvatar
      </CardContent>
    </Card>
  );
};

export default UpdateAvatar;
