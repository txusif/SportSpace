"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import SpinnerMini from "./SpinnerMini";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <SpinnerMini /> : children}
    </Button>
  );
}

export default SubmitButton;
