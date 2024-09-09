import { notFound } from "next/navigation";
import supabase from "./supabase";

export async function getTurfs() {
    const { data, error } = await supabase
        .from('turfs')
        .select('id, name, image, ratings, football, cricket, discount, footballPrice, cricketPrice, location, surfaceType').order("name")

    if (error) {
        console.error(error)
        throw new Error("Turfs could not be loaded");

    }

    // await new Promise((res) => setTimeout(res, 2000));
    return data;
}

export async function getTurf(id: number) {
    const { data, error } = await supabase
        .from('turfs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error)
        notFound();
    }

    return data;
}