import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ChipRow from "@/components/ChipRow";
import { services, brands, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Reliable Refrigeration",
  description:
    "Domestic repairs, commercial refrigeration, cold rooms & freezer rooms, and refrigeration sales — serviced on-site across Durban and Queensburgh.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            On-site, most areas
          </p>
          <h1 className="mt-2.5 max-w-2xl text-balance font-display text-4xl font-bold sm:text-5xl">
            What we service
          </h1>
          <p className="mt-6 max-w-lg text-mist">
            From a household fridge to a full commercial cold room, we diagnose and
            repair on-site — no dropping anything off, no guessing games.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-deep-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Parts &amp; repairs
          </p>
          <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
            Brands we service
          </h2>
          <div className="mt-6">
            <ChipRow items={brands} />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-gradient-to-br from-deep-2 to-deep-3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Not sure which one you need?
              </h2>
              <p className="mt-2 max-w-md text-mist">Call us and describe the problem — we&rsquo;ll take it from there.</p>
            </div>
            <a
              href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
              className="whitespace-nowrap rounded-full bg-red px-7 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Call {site.phones.mobile}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
