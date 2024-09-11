"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { SupabaseUser } from "@/context/SupabaseUserTypes";

const LoginButton = () => {
  const { user, handleUser } = useAuth();
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      handleUser(user as SupabaseUser);
    };
    fetchUser();
  }, []);

  if (user) {
    return (
      <Button
        onClick={() => {
          signout();
          handleUser(null);
        }}
      >
        Log out
      </Button>
    );
  }
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
