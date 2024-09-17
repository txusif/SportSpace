"use server";

import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function updateProfileAction(formData: FormData) {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user)
        throw new Error(
            "Unauthorized: You need to be signed in to update your profile",
        );

    const bookingData = {
        phone_number: formData.get("phone_number"),
    };

    const { error } = await supabase
        .from('profiles')
        .update(bookingData)
        .eq('id', user.id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Profile could not be updated");
    }

    revalidatePath("/account/profile");
}