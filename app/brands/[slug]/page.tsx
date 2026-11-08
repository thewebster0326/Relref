import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PricingBox from "@/components/PricingBox";
import SimpleFaq from "@/components/SimpleFaq";
import { areas } from "@/lib/content";
import { brandPages, brandBySlug } from "@/lib/pages";

export function generateStaticParams() {
  return brandPages.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Fridge Repairs in Durban | Reliable Refrigeration`,
    description: brand.summary,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) notFound();

  const others = brandPages.filter((b) => b.slug !== slug);
  const topAreas = areas.slice(0, 8);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Link href="/brands" className="font-mono text-xs uppercase tracking-wider text-ice hover:text-frost">
            &larr; All brands
          </Link>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            {brand.name} fridge repairs in Durban
          </h1>
          <p className="mt-5 max-w-xl text-mist">{brand.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            {brand.intro.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-frost/90">
                {p}
              </p>
            ))}
            <h2 className="mt-8 font-display text-xl font-semibold">{brand.faultsHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {brand.faults.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mist">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-none">
                    <path d="M3 8.5 6.2 12 13 4" stroke="var(--ice)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            {brand.note && (
              <p className="mt-6 rounded-2xl border border-line bg-deep-2/60 p-5 text-sm leading-relaxed text-frost/90">
                {brand.note}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-5">
            {brand.photos.map((photo) => (
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
            {brand.photos.length === 0 && brand.logo && (
              <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white p-6">
                <Image src={brand.logo} alt={`${brand.name} logo`} width={320} height={120} className="h-auto max-h-28 w-auto object-contain" />
              </div>
            )}
            <PricingBox />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-deep-2/40">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Common questions</p>
          <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
            {brand.name} repairs: questions we get
          </h2>
          <div className="mt-8">
            <SimpleFaq items={brand.faq} />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Where we repair</p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">
                Fridge repairs near you
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {topAreas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/services/domestic-repairs/${a.slug}`}
                    className="rounded-full border border-line px-4 py-2 font-mono text-xs text-mist transition-colors hover:border-ice hover:text-ice"
                  >
                    {a.name}
                  </Link>
                ))}
                <Link
                  href="/services/domestic-repairs"
                  className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ice transition-colors hover:border-ice"
                >
                  All areas
                </Link>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Other brands</p>
              <h2 className="mt-2.5 font-display text-lg font-semibold">We repair these too</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {others.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands/${b.slug}`}
                    className="rounded-full border border-line px-4 py-2 font-mono text-xs text-mist transition-colors hover:border-ice hover:text-ice"
                  >
                    {b.name}
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
