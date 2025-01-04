"use client";

import Giscus from "@giscus/react";
import React from "react";

export default function page() {
  return (
    <>
      <section>
        <Giscus
          mapping="pathname"
          repo="byanrkh/portfolio"
          repoId="R_kgDONlq98g"
          category="General"
          categoryId="DIC_kwDONlq98s4CltmZ"
          emitMetadata="0"
          theme="preferred_color_scheme"
          lang="en"
          strict="0"
          reactionsEnabled="1"
          inputPosition="top"
        />
      </section>
    </>
  );
}
