import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-xl font-medium relative group cursor-pointer mb-5">
      {children}
      <span className="absolute -left-5 top-0 text-zinc-500 hidden group-hover:block">
        #
      </span>
    </h1>
  );
}
