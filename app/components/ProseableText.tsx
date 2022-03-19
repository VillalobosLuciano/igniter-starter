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
          <div className="relative h-80 lg:mt-24">
            <SanityImage
              className="h-80"
              filter="blur"
              src={value}
              alt={value.alt || " "}
              layout="fill"
            />
          </div>
          <p className="mb-12 mt-3 text-center italic text-gray-600 dark:text-gray-400">
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
      prose max-w-none
      prose-headings:mb-4 
      prose-headings:mt-8 
      prose-headings:text-gray-700 
      prose-a:text-amber-500/90 
      hover:prose-a:text-amber-500 
      dark:prose-invert 
      prose-headings:dark:text-gray-300 
      prose-a:dark:text-orange-500/90  
      hover:prose-a:dark:text-orange-500
      "
    >
      <PortableText value={content} components={ptComponents} />
    </div>
  );
}
