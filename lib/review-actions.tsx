"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

export async function createReviewAction(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error(
      "Unauthorized: You need to be signed in to create a booking"
    );

  const turfId = Number(formData.get("turfId"));

  const prevReviews = JSON.parse(formData.get("prevReviews") as string);

  const currentReview = formData.get("text");

  let newReviewObject;

  if (prevReviews === null) {
    newReviewObject = [
      {
        username: user.user_metadata.full_name,
        text: currentReview,
        stars: Number(formData.get("stars")),
      },
    ];
  } else {
    newReviewObject = [
      ...prevReviews,
      {
        username: user.user_metadata.full_name,
        text: currentReview,
        stars: Number(formData.get("stars")),
      },
    ];
  }

  const { data, error } = await supabase
    .from("turfs")
    .update({ reviews: newReviewObject })
    .eq("id", turfId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Review could not be created");
  }

  console.log("Review created");
  // console.log(data);

  revalidatePath(`/turfs/${data.id}`);
  revalidatePath("/turfs");
}
