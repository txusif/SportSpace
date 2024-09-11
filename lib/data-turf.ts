import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

export async function getTurfs() {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('turfs')
        .select('id, name, images, rating, football, cricket, discount, prices, location, surfaceType').order("name")

    if (error) {
        console.error(error)
        throw new Error("Turfs could not be loaded");

    }

    // await new Promise((res) => setTimeout(res, 20000));
    return data;
}

export async function getTurf(id: number) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('turfs')
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