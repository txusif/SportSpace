"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full space-x-2"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height={18}
        width={18}
      />
      <span>Continue with Google</span>
    </Button>
  );
};

export default SignInWithGoogleButton;
