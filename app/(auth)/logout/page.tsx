"use client";

import { TypographyH2, TypographyP } from "@/components/typography/Typography";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 1000);
  }, [router]);

  return (
    <div className="mt-28 lg:mt-24">
      <div className="relative z-10 text-center space-y-1">
        <TypographyH2>You have been successfully logged out.</TypographyH2>
        <TypographyP>Redirecting in a moment</TypographyP>
      </div>
    </div>
  );
};

export default LogoutPage;
