import React from "react";
import { useRouter } from "next/router";
import SanityImage from "./SanityImage";

export default function ServiceCard({
  slug,
  title,
  excerpt,
  coverImage,
  _id,
}: any) {
  const router = useRouter();

  return (
    <div
      key={_id}
      onClick={() => router.push(`/services/${slug}`)}
      className="group cursor-pointer rounded-lg border border-orange-500/20"
    >
      <div className="relative h-48 w-full overflow-hidden border-b border-orange-500/20 transition group-hover:opacity-75 sm:h-52">
        <SanityImage filter="blur" src={coverImage} layout="fill" />
      </div>
      <div className="flex pl-5">
        <h3 className="mt-3 bg-gradient-to-br from-[#792300] to-[#F37000] bg-clip-text text-base font-medium text-transparent">
          {title}
        </h3>
      </div>
      <p className="flex-col pb-4 pl-5 text-base font-semibold text-zinc-900 dark:text-zinc-200">
        {excerpt}
      </p>
    </div>
  );
}
