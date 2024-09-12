import { createClient } from "@/utils/supabase/client";

export async function getProfile(uuid: string) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', uuid)
        .single();

    if (error) {
        console.error(error)
        throw new Error("Error loading the profile");
    }

    return data;
}