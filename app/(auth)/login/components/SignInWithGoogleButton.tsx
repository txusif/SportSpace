"use client";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

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
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="18"
        width="18"
      />
      <span>Continue with Google</span>
    </Button>
  );
};

export default SignInWithGoogleButton;
