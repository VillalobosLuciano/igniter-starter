import React from "react";

export default function Panel() {
  return (
    <div className="mx-auto max-w-7xl rounded-lg px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-12 text-center lg:py-20">
        <h2 className="text-2xl font-extrabold text-zinc-800 dark:text-white sm:text-4xl">
          <span className="block">Next.js - Sanity.io starter.</span>
          <span className="block">
            {"{ "}preview, theme, ...more{" }"}
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-zinc-500 dark:text-zinc-400">
          You can start your new project easily and quickly using Next.js and
          Sanity.io. See the details{" "}
          <a
            href="https://www.lucianov.dev/blog/next-sanity-starter"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 underline decoration-[#F37000] underline-offset-1 transition dark:text-zinc-300 dark:hover:text-zinc-200"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
}
