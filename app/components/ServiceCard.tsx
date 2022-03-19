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
      className="group relative cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-lg transition group-hover:opacity-75 sm:h-56">
        <SanityImage filter="blur" src={coverImage} layout="fill" />
      </div>
      <div className="flex">
        <h3 className="mt-6 bg-gradient-to-br from-[#792300] to-[#F37000] bg-clip-text text-base font-medium text-transparent">
          {title}
        </h3>
      </div>
      <p className="flex-col  text-base font-semibold text-gray-900 dark:text-gray-200">
        {excerpt}
      </p>
    </div>
  );
}
