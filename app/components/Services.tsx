import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services({ services }: any) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pb-16 lg:max-w-none">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200">
          Services
        </h2>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {services.map((service: any) => (
            <ServiceCard
              key={service._id}
              slug={service.slug}
              title={service.title}
              excerpt={service.excerpt}
              coverImage={service.coverImage}
              _id={service._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
