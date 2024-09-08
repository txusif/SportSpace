import { notFound } from "next/navigation";
import supabase from "./supabase";

export async function getTurfs() {

    const { data, error } = await supabase
        .from('turfs')
        .select('id, name, image, ratings, football, cricket, discount, footballPrice, cricketPrice, location').order("name")

    if (error) {
        console.error(error)
        throw new Error("Turfs could not be loaded");

    }

    // await new Promise((res) => setTimeout(res, 2000));

    return data;
}