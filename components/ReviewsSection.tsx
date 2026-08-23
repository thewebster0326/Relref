import { reviews, site } from "@/lib/content";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill={i < count ? "var(--ice)" : "none"} stroke="var(--ice)">
          <path
            d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">On Google</p>
      <h2 className="mt-2.5 font-display text-3xl font-semibold sm:text-4xl">
        What Durban says about us
      </h2>

      {reviews.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-line bg-gradient-to-b from-deep-2 to-deep-3 p-6"
            >
              <Stars count={r.rating} />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-frost/90">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs text-mist">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-line bg-deep-2/60 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Stars />
          <p className="text-frost/90">Rated by customers across Durban and Queensburgh.</p>
        </div>
        <a
          href={site.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-frost transition-colors hover:border-ice hover:text-ice"
        >
          Read our reviews on Google
        </a>
      </div>
    </section>
  );
}
