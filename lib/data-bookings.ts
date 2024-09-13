import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

export async function getAllBookings() {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })

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
        .order('created_at', { ascending: false })

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

export async function getBookedSlotsByTurfId(turfId: number) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("turfId", turfId)

    if (error) {
        console.error(error)
        throw new Error("Error loading the booked slots");
    }

    // help me make a bookedSlots object that consists of date and time

    const bookedSlots = data.map((booking) => {
        const { date, time } = booking;
        return { date, time };
    });

    return bookedSlots;
}