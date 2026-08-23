import Image from "next/image";
import Link from "next/link";
import FrostCanvas from "@/components/FrostCanvas";
import Timeline from "@/components/Timeline";
import BrandLogos from "@/components/BrandLogos";
import ClientLogos from "@/components/ClientLogos";
import ServiceCard from "@/components/ServiceCard";
import ReviewsSection from "@/components/ReviewsSection";
import { site, services, blogPosts } from "@/lib/content";

export default function Home() {
  const latestPosts = blogPosts.slice(-3).reverse();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <FrostCanvas />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              Durban &amp; Queensburgh
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              Keeping cool <span className="font-normal text-mist">under every circumstance.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
              A cold chain that hasn&rsquo;t broken since 2004 — domestic and commercial
              refrigeration, repaired on-site by technicians who treat every compressor
              like it&rsquo;s the last one.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
                className="rounded-full bg-red px-6 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Call {site.phones.mobile}
              </a>
              <Link
                href="/services"
                className="rounded-full border border-line px-6 py-3.5 font-sans text-sm font-semibold text-frost transition-colors hover:border-ice hover:text-ice"
              >
                What we service
              </Link>
            </div>
          </div>
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl border border-line lg:block">
            <Image
              src="/images/gallery/coldroom.jpg"
              alt="A custom-built cold room installed by Reliable Refrigeration"
              fill
              sizes="(min-width: 1024px) 40vw, 0px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-deep/10" />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-none border-line bg-line sm:grid-cols-4">
          {[
            { label: "Established", value: "2004" },
            { label: "Experience", value: "30+ yrs" },
            { label: "Coverage", value: "2 branches" },
            { label: "Cover", value: "Fully insured" },
          ].map((f) => (
            <div key={f.label} className="bg-deep px-6 py-8 text-center sm:text-left">
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-mist">
                {f.label}
              </p>
              <p className="mt-1.5 font-display text-xl font-semibold text-frost">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              On-site, most areas
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
              What we service
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-ice hover:text-frost">
            All services &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-deep-2/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              Cold chain, unbroken
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
              Since 2004
            </h2>
            <p className="mt-4 max-w-md text-mist">
              Owner-operated, hands-on, every job — with factory-backed warranties and
              fully equipped vehicles on every call-out.
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
          Parts &amp; repairs
        </p>
        <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
          Brands we service
        </h2>
        <div className="mt-6">
          <BrandLogos />
        </div>
      </section>

      <ReviewsSection />

      <section className="border-y border-line bg-deep-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Around Durban
          </p>
          <h2 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
            Some of our clients
          </h2>
          <div className="mt-6">
            <ClientLogos />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
              From the workshop
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
              Latest from the blog
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-ice hover:text-frost">
            All posts &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-deep-2/50 p-6 transition-colors hover:border-ice"
            >
              <p className="font-mono text-xs text-mist">
                {new Date(post.date).toLocaleDateString("en-ZA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              <span className="mt-4 font-mono text-xs uppercase tracking-wider text-ice">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-none px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative z-10 flex flex-col items-start gap-6 rounded-2xl border border-line bg-gradient-to-br from-deep-2 to-deep-3 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Fridge down? We&rsquo;re on call.
              </h2>
              <p className="mt-2 max-w-md text-mist">
                Mon&ndash;Sat, across Durban and Queensburgh.
              </p>
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
