import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-800">
      <div className="mx-4 sm:mx-auto max-w-3xl py-8">
        <p className="text-xs">© {new Date().getFullYear()} Abyan Raditya.</p>
      </div>
    </footer>
  );
}
