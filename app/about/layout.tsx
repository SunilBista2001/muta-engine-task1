import Image from "next/image";
import AboutSectionPng from "@/app/_assets/about-frame.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muta Engine - About - Task 1",
  description: "...",
};

const HeroSection = () => {
  return (
    <main className="min-w-full relative">
      <div className="w-full">
        <Image
          src={AboutSectionPng}
          alt="About Section"
          className="lg:h-full h-[60vh] object-cover w-full"
        />
      </div>
      <div className="md:space-y-8 space-y-4 md:w-1/2 w-full absolute text-white top-[30%] left-6 md:left-12 lg:left-28  ">
        <h1 className="text-4xl md:text-6xl font-bold leading-relaxed">
          Our Mission
        </h1>
        <p className="max-sm:line-clamp-4 max-sm:pr-4">
          At MutaEngine, our mission is to revolutionize software security by
          providing cutting-edge solutions that protect your software from
          piracy, reverse engineering, and unauthorized modifications. We
          believe in empowering developers and companies to focus on innovation
          while we ensure their intellectual property remains secure.
        </p>
        <button className="bg-transparent border border-teal-400 px-4 py-2 rounded hover:bg-teal-400">
          Learn More
        </button>
      </div>
    </main>
  );
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSection />
      <div className="text-white  px-6 md:px-12 lg:px-24">{children}</div>
    </>
  );
}
