import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

export async function getAllBookings() {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('bookings')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error("Error loading all the bookings");
    }

    // await new Promise((res) => setTimeout(res, 1000));

    return data;
}

export async function getUserBookings(bookedBy: string) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('bookedBy', bookedBy)

    if (error) {
        console.error(error)
        throw new Error("Error loading the users bookings");
    }

    // await new Promise((res) => setTimeout(res, 1000));

    return data;
}

export async function getBooking(id: number) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error)
        notFound();
    }

    // await new Promise((res) => setTimeout(res, 1000));

    return data;
}