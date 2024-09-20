import Link from "next/link";

const footerItems = [
  {
    title: "Overview",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact",
  },
  {
    title: "Features",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms of Use",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#06080D]  py-8 md:py-10 text-white  px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-between">
        <Link href={"/"} className="text-lg font-bold">
          MUTA Engine
        </Link>

        <nav className="md:flex hidden flex-wrap space-x-4 text-gray-300">
          {footerItems.map((item, index) => (
            <Link
              key={index}
              href={item.link ?? ""}
              className="hover:text-gray-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="border-gray-800 my-8" />

      <div className="container mx-auto mt-4 text-center text-xs text-gray-500">
        MutaEngine © 2024. All rights reserved.
      </div>
    </footer>
  );
}
