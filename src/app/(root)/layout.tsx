import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-4 sm:mx-auto max-w-3xl py-20">{children}</main>
      <Footer />
    </>
  );
}
