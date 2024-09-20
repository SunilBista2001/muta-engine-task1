"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const navItems = [
  {
    title: "Overview",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Solutions",
  },
  {
    title: "Contact Us",
  },
];

export default function Navbar() {
  const path = usePathname();
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <header className="py-6 flex justify-between items-center text-white  px-6 md:px-12 lg:px-24">
      <Link href={"/"} className="text-lg font-bold">
        MUTA Engine
      </Link>

      <nav className="space-x-6 hidden md:flex">
        {navItems?.map((item, idx) => (
          <Link
            key={idx}
            href={item.href ?? ""}
            className={`hover:text-teal-400 ${
              path === item.href && "text-teal-400 font-semibold"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="hidden md:block space-x-4">
        <button className="bg-transparent border border-teal-400 px-4 py-2 rounded hover:bg-teal-400">
          Login
        </button>
        <button className="bg-teal-400 px-4 py-2 rounded hover:bg-teal-500">
          Sign Up
        </button>
      </div>

      <div className="md:hidden flex">
        <Menu
          className="cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>

      <MobileSidebar show={showSidebar} setShow={setShowSidebar} />
    </header>
  );
}
