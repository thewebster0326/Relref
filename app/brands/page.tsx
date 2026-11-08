import type { Metadata } from "next";
import Link from "next/link";
import PricingBox from "@/components/PricingBox";
import TagList from "@/components/TagList";
import { services } from "@/lib/content";
import { brandPages } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Fridge Brands We Repair in Durban | Reliable Refrigeration",
  description:
    "We repair Defy, KIC, Samsung, LG, Hisense, Bosch, AEG, Whirlpool, Fridgemaster, Fridge Star and many other fridge and freezer brands on site in Durban.",
};

const moreBrands =
  services.find((s) => s.slug === "domestic-repairs")?.extras?.[0]?.items.filter(
    (i) => !brandPages.some((b) => b.name.toLowerCase() === i.toLowerCase()) && !i.includes("&")
  ) ?? [];

export default function BrandsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">Any make, on site</p>
          <h1 className="mt-2.5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            Fridge brands we repair in Durban
          </h1>
          <p className="mt-6 max-w-lg text-mist">
            We repair most domestic and commercial refrigeration brands. Pick yours for the
            faults we see most and what a repair involves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brandPages.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="rounded-2xl border border-line bg-deep-2/60 p-6 transition-colors hover:border-ice"
            >
              <h2 className="font-display text-lg font-semibold">{b.name} repairs</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{b.summary}</p>
            </Link>
          ))}
        </div>
        {moreBrands.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold">Also repaired</h2>
            <div className="mt-4">
              <TagList items={moreBrands} />
            </div>
          </div>
        )}
        <div className="mt-12 max-w-xl">
          <PricingBox />
        </div>
      </section>
    </>
  );
}
