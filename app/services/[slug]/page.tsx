import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Reliable Refrigeration`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Link href="/services" className="font-mono text-xs uppercase tracking-wider text-ice hover:text-frost">
            &larr; All services
          </Link>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-lg text-mist">{service.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-line sm:h-96">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            {service.intro.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-frost/90">
                {p}
              </p>
            ))}
            <ul className="mt-6 flex flex-col gap-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mist">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-none">
                    <path d="M3 8.5 6.2 12 13 4" stroke="var(--ice)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
              className="mt-8 inline-block rounded-full bg-red px-7 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Call {site.phones.mobile}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Other services
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-line bg-deep-2/60 p-6 transition-colors hover:border-ice"
              >
                <h3 className="font-display text-lg font-semibold">{s.shortName}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
