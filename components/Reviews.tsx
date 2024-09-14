"use client";

import { useState } from "react";
import { TurfProps } from "@/app/turfs/[turfId]/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TypographyH2 } from "./typography/Typography";
import { FaStar } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";
import SubmitButton from "./SubmitButton";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createReviewAction } from "@/lib/review-actions";

const Reviews = ({
  reviews,
  turfId,
}: {
  reviews: TurfProps["reviews"];
  turfId: number;
}) => {
  const [numOfStars, setNumOfStars] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const formData = new FormData();

  formData.append("stars", String(numOfStars));
  formData.append("text", reviewText);
  formData.append("turfId", String(turfId));
  formData.append("prevReviews", JSON.stringify(reviews));

  const createReviewWithData = createReviewAction.bind(null, formData);

  return (
    <div className="mt-10">
      <TypographyH2 className="text-primary">Reviews</TypographyH2>

      <div className="mt-2 flex flex-col lg:flex-row gap-6">
        <div className="order-2 lg:order-none grid grid-cols-1 md:grid-cols-[23rem_23rem] gap-6">
          {reviews?.map((review, index) => (
            <Card key={index} className="p-6">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LuUserCircle2
                    size={32}
                    className="text-muted-foreground"
                    strokeWidth={2}
                  />
                  {review.username}
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <FaStar key={index} size={16} className="text-primary" />
                  ))}
                </div>
              </CardTitle>
              <CardDescription className="py-2">{review.text}</CardDescription>
            </Card>
          ))}
        </div>

        <Card className="order-1 lg:order-none grow h-max">
          <CardHeader>
            <CardTitle>Add your review </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action={async () => {
                await createReviewWithData();
                setNumOfStars(0);
                setReviewText("");
              }}
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value="John Doe"
                    disabled
                  />
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      size={20}
                      onClick={() => setNumOfStars(index + 1)}
                      className={`cursor-pointer
                       ${
                         index < numOfStars
                           ? "text-primary"
                           : "text-muted-foreground"
                       }
                      `}
                    />
                  ))}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="review">How was your experience?</Label>
                  <Textarea
                    name="review"
                    id="review"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </div>

                <div>
                  <SubmitButton size="sm">Submit</SubmitButton>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
