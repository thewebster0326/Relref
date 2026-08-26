import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TagList from "@/components/TagList";
import { services, areas, landingServiceSlugs, site } from "@/lib/content";
import { areaBySlug, neighborsOf, landingIntro } from "@/lib/landingCopy";

export function generateStaticParams() {
  return landingServiceSlugs.flatMap((slug) =>
    areas.map((area) => ({ slug, area: area.slug }))
  );
}

function getData(slug: string, areaSlug: string) {
  if (!landingServiceSlugs.includes(slug)) return null;
  const service = services.find((s) => s.slug === slug);
  const area = areaBySlug(areaSlug);
  if (!service || !area) return null;
  return { service, area };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const data = getData(slug, areaSlug);
  if (!data) return {};
  const { service, area } = data;
  return {
    title: `${service.shortName} in ${area.name} | Reliable Refrigeration`,
    description: `${service.summary} Servicing ${area.name} and ${area.region}, based in Durban since 2004.`,
  };
}

export default async function AreaLandingPage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const data = getData(slug, areaSlug);
  if (!data) notFound();
  const { service, area } = data;

  const neighbors = neighborsOf(area);
  const otherLandingServices = services.filter(
    (s) => landingServiceSlugs.includes(s.slug) && s.slug !== service.slug
  );

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href={`/services/${service.slug}`}
            className="font-mono text-xs uppercase tracking-wider text-ice hover:text-frost"
          >
            &larr; {service.shortName}
          </Link>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            {service.shortName} in {area.name}
          </h1>
          <p className="mt-5 max-w-lg text-mist">{landingIntro(service, area)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-line sm:h-96">
            <Image
              src={service.image}
              alt={`${service.name} in ${area.name}`}
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

      {service.extras && service.extras.length > 0 && (
        <section className="border-t border-line bg-deep-2/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap">
              {service.extras.map((extra) => (
                <div key={extra.heading} className="flex-1 sm:min-w-[260px]">
                  <h2 className="font-display text-xl font-semibold">{extra.heading}</h2>
                  <div className="mt-4">
                    <TagList items={extra.items} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
                Also nearby
              </p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">
                {service.shortName} in neighbouring areas
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                {neighbors.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/services/${service.slug}/${n.slug}`}
                    className="text-frost/80 hover:text-ice"
                  >
                    {service.shortName} in {n.name} &rarr;
                  </Link>
                ))}
                <Link href={`/services/${service.slug}`} className="text-ice hover:text-frost">
                  All areas for {service.shortName} &rarr;
                </Link>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
                Also in {area.name}
              </p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">
                Other services we offer here
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                {otherLandingServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/${area.slug}`}
                    className="text-frost/80 hover:text-ice"
                  >
                    {s.shortName} in {area.name} &rarr;
                  </Link>
                ))}
                <Link href="/services" className="text-ice hover:text-frost">
                  All services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
