"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { SupabaseUser } from "@/context/SupabaseUserTypes";
import { LuLogIn, LuLogOut } from "react-icons/lu";

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
    }, [supabase.auth]);

    if (user) {
        return (
            <Button
                onClick={() => {
                    signout();
                    handleUser(null);
                }}
                className="flex items-center gap-1 font-semibold text-base"
            >
                <LuLogOut size={20} />
                <span className="hidden lg:block">Log out</span>
            </Button>
        );
    }
    return (
        <Button
            onClick={() => {
                router.push("/login");
            }}
            className="flex items-center gap-1 font-semibold text-base"
        >
            <LuLogIn size={20} />
            <span className="hidden lg:block">Login</span>
        </Button>
    );
};

export default LoginButton;
