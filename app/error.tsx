"use client";

export default function Error({
  error,
}: // reset,
Readonly<{
  error: Error;
  // reset: () => void
}>) {
  return <div>{error.message}</div>;
}
