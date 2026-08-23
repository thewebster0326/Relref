import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-deep-2/50 transition-colors hover:border-ice"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/10 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl font-semibold">{service.shortName}</h3>
        <p className="text-sm leading-relaxed text-mist">{service.summary}</p>
        <span className="mt-auto pt-3 font-mono text-xs uppercase tracking-wider text-ice">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
