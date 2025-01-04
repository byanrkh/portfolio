import Link from "next/link";
import React from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-800">
      <div className="mx-4 sm:mx-auto max-w-3xl py-8 flex justify-between items-center">
        <p className="text-xs">© {new Date().getFullYear()} Abyan Raditya.</p>
        <ul className="flex gap-5 text-zinc-400">
          <li>
            <Link href="https://github.com/byanrkh">
              <GitHub size={17} />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/byanrkh">
              <Twitter size={17} />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/byanrkh">
              <Instagram size={17} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
