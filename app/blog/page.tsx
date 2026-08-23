import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Reliable Refrigeration",
  description:
    "Notes from the workshop — refrigeration maintenance tips and what to watch for, from Reliable Refrigeration.",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].reverse();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            From the workshop
          </p>
          <h1 className="mt-2.5 max-w-xl text-balance font-display text-4xl font-bold sm:text-5xl">
            Notes on keeping things cold
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
                {" · "}
                {post.readMinutes} min read
              </p>
              <h2 className="mt-3 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              <span className="mt-4 font-mono text-xs uppercase tracking-wider text-ice">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
