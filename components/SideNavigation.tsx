"use client";

import { usePathname } from "next/navigation";
import { LuCalendarDays, LuHome, LuUser } from "react-icons/lu";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <LuHome size={20} />,
  },
  {
    name: "Bookings",
    href: "/account/bookings",
    icon: <LuCalendarDays size={20} />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <LuUser size={20} />,
  },
];

const SideNavigation = () => {
  const path = usePathname();

  return (
    <nav className="max-md:border border-r border-input max-md:rounded-md">
      <ul className="h-full max-md:grid grid-cols-[1fr_1fr_1fr] flex md:flex-col gap-2">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 rounded-l-md px-5 py-3 font-semibold text-sm md:text-lg hover:bg-secondary transition-colors duration-300 ${
                link.href === path ? "text-primary" : ""
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
