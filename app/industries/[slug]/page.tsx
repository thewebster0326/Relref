import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PricingBox from "@/components/PricingBox";
import SimpleFaq from "@/components/SimpleFaq";
import TagList from "@/components/TagList";
import { areas } from "@/lib/content";
import { industryPages, industryBySlug } from "@/lib/pages";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = industryBySlug(slug);
  if (!page) return {};
  return {
    title: `Commercial Refrigeration Repairs for ${page.name} in Durban | Reliable Refrigeration`,
    description: page.summary,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = industryBySlug(slug);
  if (!page) notFound();

  const others = industryPages.filter((i) => i.slug !== slug);
  const topAreas = areas.slice(0, 8);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Link href="/industries" className="font-mono text-xs uppercase tracking-wider text-ice hover:text-frost">
            &larr; All business types
          </Link>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            Refrigeration repairs for {page.name.toLowerCase()} in Durban
          </h1>
          <p className="mt-5 max-w-xl text-mist">{page.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            {page.intro.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-frost/90">
                {p}
              </p>
            ))}
            <h2 className="mt-8 font-display text-xl font-semibold">{page.equipmentHeading}</h2>
            <div className="mt-4">
              <TagList items={page.equipment} />
            </div>
            <h2 className="mt-8 font-display text-xl font-semibold">What we do</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {page.whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mist">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-none">
                    <path d="M3 8.5 6.2 12 13 4" stroke="var(--ice)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            {page.photos.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="mt-2 text-xs text-mist">{photo.caption}</figcaption>
                )}
              </figure>
            ))}
            <PricingBox />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep-2/40">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Common questions</p>
          <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
            Refrigeration for {page.name.toLowerCase()}: questions we get
          </h2>
          <div className="mt-8">
            <SimpleFaq items={page.faq} />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Where we work</p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">
                Commercial refrigeration near you
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {topAreas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/services/commercial-refrigeration/${a.slug}`}
                    className="rounded-full border border-line px-4 py-2 font-mono text-xs text-mist transition-colors hover:border-ice hover:text-ice"
                  >
                    {a.name}
                  </Link>
                ))}
                <Link
                  href="/services/commercial-refrigeration"
                  className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ice transition-colors hover:border-ice"
                >
                  All areas
                </Link>
              </div>
              <p className="mt-6 text-sm text-mist">
                See also{" "}
                <Link href="/services/cold-rooms-freezer-rooms" className="text-ice hover:text-frost">
                  cold rooms and freezer rooms
                </Link>{" "}
                and{" "}
                <Link href="/services/maintenance" className="text-ice hover:text-frost">
                  scheduled maintenance
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Other businesses</p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">We also look after</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {others.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}`}
                    className="rounded-full border border-line px-4 py-2 font-mono text-xs text-mist transition-colors hover:border-ice hover:text-ice"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
