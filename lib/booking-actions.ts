"use server";


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function createBookingAction(formData: FormData) {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();

    console.log("user");
    console.log(user);

    if (!user)
        throw new Error(
            "Unauthorized: You need to be signed in to create a booking",
        );

    console.log("formData");
    console.log(formData);

    // const bookingData = {};

    // const { data, error } = await supabase.from('bookings')
    //     .insert([bookingData])
    //     .select().single();


    // if (error) {
    //     console.error(error);
    //     throw new Error("Booking could not be created");
    // }

    // console.log("Booking created");
    // console.log(data);


    // return { data, error }

    // revalidatePath(`cabins/${bookingData.cabinId}`);
    // redirect("/turfs/thankyou");
    return null;
}