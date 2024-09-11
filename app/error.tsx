"use client";

import { TypographyMutedBold } from "@/components/typography/Typography";

export default function Error({
  error,
}: // reset,
Readonly<{
  error: Error;
  // reset: () => void
}>) {
  return (
    <div className="flex items-center justify-center">
      <TypographyMutedBold>{error.message}</TypographyMutedBold>
    </div>
  );
}
