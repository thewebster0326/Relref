import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Reliable Refrigeration",
  description:
    "Owner-operated since 2004, Reliable Refrigeration services domestic and commercial refrigeration across Durban and Queensburgh.",
};

const values = [
  {
    title: "Owner-operated",
    desc: "The owners are hands-on through every job — not just the pitch.",
  },
  {
    title: "Fully insured",
    desc: "Cover that keeps pace with modern, flammable refrigerants.",
  },
  {
    title: "Factory-backed warranties",
    desc: "Workmanship you don't have to take on faith.",
  },
  {
    title: "Fully equipped vehicles",
    desc: "Most repairs finished in one visit, with the right parts on the van.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              Since 2004
            </p>
            <h1 className="mt-2.5 text-balance font-display text-4xl font-bold sm:text-5xl">
              A cold chain built one honest repair at a time.
            </h1>
            <p className="mt-6 max-w-md text-mist">
              Reliable Refrigeration has grown from strength to strength through
              commitment, service delivery and a passion for the trade — from
              domestic household fridges to commercialised restaurants, supermarket
              refrigeration and mobile fridges.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-line sm:h-96">
            <Image
              src="/images/gallery/commercial-freezer.jpg"
              alt="Commercial freezer unit serviced by Reliable Refrigeration"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              Cold chain, unbroken
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-semibold">Our story</h2>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="border-y border-line bg-deep-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Why call us
          </p>
          <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
            What hasn&rsquo;t changed since 2004
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-deep-2/60 p-6">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/gallery/coldroom.jpg"
              alt="Custom-built cold room"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              Two branches
            </p>
            <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
              Durban &amp; Queensburgh
            </h2>
            <p className="mt-4 max-w-md text-mist">
              Two branches cover most areas in and around Durban, so a technician is
              never far from wherever your fridge, cold room or freezer room actually
              is.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phones.durban.replace(/\s/g, "")}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-frost hover:border-ice hover:text-ice"
              >
                Durban — {site.phones.durban}
              </a>
              <a
                href={`tel:${site.phones.queensburgh.replace(/\s/g, "")}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-frost hover:border-ice hover:text-ice"
              >
                Queensburgh — {site.phones.queensburgh}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-gradient-to-br from-deep-2 to-deep-3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Want to know more about a specific job?
              </h2>
              <p className="mt-2 max-w-md text-mist">
                Tell us what&rsquo;s wrong and we&rsquo;ll tell you straight what it&rsquo;ll take to fix it.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-red px-7 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
