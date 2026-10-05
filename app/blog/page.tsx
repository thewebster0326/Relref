import type { Metadata } from "next";
import Link from "next/link";
import PostImage from "@/components/PostImage";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Reliable Refrigeration",
  description:
    "Practical refrigeration advice from Reliable Refrigeration in Durban: fridge faults, cold room care, load shedding tips and when to repair or replace.",
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
          <p className="mt-6 max-w-lg text-mist">
            Plain-English advice on fridge faults, cold rooms, power cuts and when a
            repair is worth it, from technicians who do this every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-deep-2/50 transition-colors hover:border-ice"
            >
              <PostImage post={post} className="h-48" priority={i < 3} />
              <div className="flex flex-1 flex-col p-6">
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
                <span className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-ice">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
