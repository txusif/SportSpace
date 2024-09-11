"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const User = ({ path }: { path: string }) => {
  const { user } = useAuth();

  if (user === null) {
    return (
      <Link
        href="/account"
        className={`text-lg font-medium capitalize text-accent-foreground transition-colors duration-300 hover:text-primary ${
          path === "/account" ? "text-primary border-b-2 border-primary" : ""
        }`}
      >
        account
      </Link>
    );
  }
  return (
    <Link
      href="/account"
      className="flex items-center gap-3 text-accent-foreground hover:text-primary transition-colors duration-300"
    >
      {user.user_metadata.avatar_url ? (
        <Image
          src={user.user_metadata.avatar_url}
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      ) : (
        <div className="flex justify-center items-center bg-secondary rounded-full w-[36px] h-[36px]">
          {user.user_metadata.full_name
            .split(" ")
            .map((name: string) => name[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
      )}

      <span
        className={`text-lg font-medium capitalize  ${
          path === "/account" ? "text-primary border-b-2 border-primary" : ""
        }`}
      >
        account
      </span>
    </Link>
  );
};

export default User;
