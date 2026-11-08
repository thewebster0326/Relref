import { site } from "@/lib/content";
import { pricing } from "@/lib/pages";

export default function PricingBox() {
  return (
    <div className="rounded-2xl border border-line bg-deep-2/60 p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">What it costs</p>
      <h2 className="mt-2.5 font-display text-2xl font-semibold">Clear pricing</h2>
      <ul className="mt-5 flex flex-col gap-3 text-sm text-frost/90">
        <li>{pricing.callout}</li>
        <li>{pricing.minor}</li>
        <li>{pricing.major}</li>
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-mist">{pricing.note}</p>
      <a
        href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
        className="mt-6 inline-block rounded-full bg-red px-7 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Call {site.phones.mobile}
      </a>
    </div>
  );
}
