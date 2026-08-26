import { faqs } from "@/lib/content";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
        Common questions
      </p>
      <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
        Frequently asked questions
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-line bg-deep-2/50 open:bg-deep-2"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-lg font-medium marker:content-none">
              {faq.question}
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
            <p className="px-6 pb-5 text-sm leading-relaxed text-mist">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
