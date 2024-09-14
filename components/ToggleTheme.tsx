"use client";

import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="themeButton"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <LuMoon size={22} /> : <LuSun size={22} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
