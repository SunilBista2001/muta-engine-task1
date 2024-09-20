"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function MobileSidebar({ show, setShow }: any) {
  const path = usePathname();
  return (
    <div
      className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform duration-300 transform ${
        show ? "translate-x-0" : "translate-x-full"
      } shadow-lg text-black  bg-gray-100 dark:bg-gray-800`}
      tabIndex={-1}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        onClick={() => setShow(!show)}
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <X size={24} />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-6 text-xl font-medium flex flex-col justify-center">
          {navItems?.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href ?? ""}
                className={`hover:text-teal-400 ${
                  path === item.href && "text-teal-400 font-semibold"
                }`}
                onClick={() => setShow(!show)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
