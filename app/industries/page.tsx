import type { Metadata } from "next";
import Link from "next/link";
import PricingBox from "@/components/PricingBox";
import { industryPages } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Commercial Refrigeration for Businesses in Durban | Reliable Refrigeration",
  description:
    "Refrigeration repairs for restaurants, bakeries, butcheries, coffee shops, bars, shops, petrol stations, schools, hotels and caterers in Durban.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">For business</p>
          <h1 className="mt-2.5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            Commercial refrigeration for every kind of business
          </h1>
          <p className="mt-6 max-w-lg text-mist">
            A fridge failure costs every business differently. Choose yours to see the equipment
            we repair and how we work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryPages.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="rounded-2xl border border-line bg-deep-2/60 p-6 transition-colors hover:border-ice"
            >
              <h2 className="font-display text-lg font-semibold">{i.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{i.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 max-w-xl">
          <PricingBox />
        </div>
      </section>
    </>
  );
}
