import React from "react";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" text-white  px-6 md:px-12 lg:px-24 ">{children}</div>;
}
