"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import SpinnerMini from "./SpinnerMini";

function SubmitButton({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon" | "xl" | null | undefined;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size={size}>
      {pending ? <SpinnerMini /> : children}
    </Button>
  );
}

export default SubmitButton;
