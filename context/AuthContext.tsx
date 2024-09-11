"use client";

import { createClient } from "@/utils/supabase/client";
import { createContext, useContext, useEffect, useState } from "react";
import { SupabaseUser } from "./SupabaseUserTypes";

interface AuthContextType {
  user: SupabaseUser | null;
  handleUser: (newUser: SupabaseUser | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user as SupabaseUser);
    };

    fetchUser();
  }, [setUser, supabase.auth]);

  function handleUser(newUser: SupabaseUser | null) {
    setUser(newUser);
  }

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

// let { data: profiles, error } = await supabase
//   .from("profiles")
//   .select("*")
//   .eq("id", user!.id);

// console.log(profiles);
