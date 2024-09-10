"use client";

import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { LuMenu } from "react-icons/lu";
import { Button } from "./ui/button";
import Signout from "./Signout";

export const navLinks = [
  { label: "turfs", href: "/turfs" },
  { label: "about", href: "/about" },
  { label: "account", href: "/account" },
];

const Nav = () => {
  const path = usePathname();

  return (
    <>
      <nav className="hidden md:flex items-center gap-16">
        <ul className="flex items-center gap-16">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={`text-lg font-medium capitalize text-accent-foreground transition-colors duration-300 hover:text-primary ${
                  link.href === path
                    ? "text-primary border-b-2 border-primary"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ToggleTheme />
      </nav>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center justify-center" asChild>
            <Button variant="outline" size="icon">
              <LuMenu size={28} className="text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center justify-center gap-24">
            <div>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-3xl text-primary font-semibold tracking-wider"
                >
                  BookMyTurf
                </Link>
              </SheetClose>
            </div>

            <nav className="">
              <ul className="flex flex-col gap-8 items-center justify-center">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={`text-xl font-medium capitalize text-accent-foreground transition-colors duration-300 hover:text-primary ${
                          link.href === path
                            ? "text-primary border-b-2 border-primary"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}

                <Signout />
                <ToggleTheme />
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Nav;
