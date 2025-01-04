import Title from "@/components/ui/Title";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section>
        <Title>Blogs</Title>
        <div className="grid grid-cols-1 gap-3">
          <Link
            href={"/blog/wkwk"}
            className="border border-[#2a2a2e] p-4 rounded-lg hover:scale-[1.02] duration-75"
          >
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className="flex justify-between items-center text-xs mt-1">
              <span className="bg-[#1c1c20] border border-[#2a2a2e] text-[#949494] rounded px-2 py-0.5">
                # NextJS
              </span>
              <p>Jan 1, 2025</p>
            </div>
          </Link>
          <Link
            href={"/blog/wkwk"}
            className="border border-[#2a2a2e] p-4 rounded-lg hover:scale-[1.02] duration-75"
          >
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className="flex justify-between items-center text-xs mt-1">
              <span className="bg-[#1c1c20] border border-[#2a2a2e] text-[#949494] rounded px-2 py-0.5">
                # NextJS
              </span>
              <p>Jan 1, 2025</p>
            </div>
          </Link>
          <Link
            href={"/blog/wkwk"}
            className="border border-[#2a2a2e] p-4 rounded-lg hover:scale-[1.02] duration-75"
          >
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className="flex justify-between items-center text-xs mt-1">
              <span className="bg-[#1c1c20] border border-[#2a2a2e] text-[#949494] rounded px-2 py-0.5">
                # NextJS
              </span>
              <p>Jan 1, 2025</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
