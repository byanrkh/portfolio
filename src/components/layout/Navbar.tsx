"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { Drawer } from "vaul";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Guestbook",
      path: "/guestbook",
    },
  ];

  return (
    <nav className="border-b border-b-zinc-800">
      <div className="mx-8 sm:mx-auto max-w-3xl py-6 sm:py-8 flex justify-between items-center">
        <Image src={"/assets/logo.svg"} alt="logo" width={20} height={20} />
        <ul className="hidden sm:flex gap-5 text-sm">
          {links.map((nav, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={nav.path}
                  className={
                    pathname === nav.path
                      ? "underline underline-offset-2 text-white"
                      : ""
                  }
                >
                  {nav.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Drawer.Root>
          <Drawer.Trigger className="block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu "
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 block sm:hidden" />
            <Drawer.Content className="backdrop-blur-md flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 border border-[#2a2a2e]">
              <div className="p-4 backdrop-blur-lg rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#2a2a2e] mb-4"
                />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="hidden"></Drawer.Title>
                  <div className="grid grid-cols-1 gap-3">
                    {links.map((nav, idx) => {
                      return (
                        <Link
                          key={idx}
                          href={nav.path}
                          className={cn(
                            "border border-[#2a2a2e] py-2 text-center rounded-lg",
                            pathname === nav.path ? "bg-[#2a2a2e]" : ""
                          )}
                        >
                          {nav.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </nav>
  );
}
