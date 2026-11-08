import type { PageFaq } from "@/lib/pages";

export default function SimpleFaq({ items }: { items: PageFaq[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq) => (
        <details
          key={faq.q}
          className="group rounded-2xl border border-line bg-deep-2/50 open:bg-deep-2"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-lg font-medium marker:content-none">
            {faq.q}
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
              className="flex-none text-ice transition-transform group-open:rotate-180"
            >
              <path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <p className="px-6 pb-5 text-sm leading-relaxed text-mist">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
