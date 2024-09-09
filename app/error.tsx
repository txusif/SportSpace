"use client";

export default function Error({
  error,
  reset,
}: Readonly<{ error: Error; reset: () => void }>) {
  return <div>{error.message}</div>;
}

// export default function Error() {
//   return <div>error</div>;
// }
