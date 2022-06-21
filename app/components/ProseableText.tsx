import { PortableText } from "@portabletext/react";
import SanityImage from "./SanityImage";

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <>
          <div className="relative mx-auto mt-10 mb-4 h-56 max-w-xl lg:mt-16 lg:h-80">
            <SanityImage
              className=""
              filter="blur"
              src={value}
              alt={value.alt || " "}
              layout="fill"
            />
          </div>
          <p className="mb-12 mt-3 text-center italic text-zinc-600 dark:text-zinc-400">
            {value.caption}
          </p>
        </>
      );
    },
  },
};

export default function ProseableText({ content }: any) {
  return (
    <div
      className="
      prose
      max-w-none py-8
      prose-headings:mb-4 
      prose-headings:mt-8 
      prose-headings:text-zinc-700 
      prose-a:text-amber-500/90 
      hover:prose-a:text-amber-500 
      dark:prose-invert 
      prose-headings:dark:text-zinc-300 
      prose-a:dark:text-orange-500/90  
      hover:prose-a:dark:text-orange-500
      "
    >
      <PortableText value={content} components={ptComponents} />
    </div>
  );
}
