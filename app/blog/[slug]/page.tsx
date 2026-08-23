import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import { blogPosts, site } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Reliable Refrigeration`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Link href="/blog" className="font-mono text-xs uppercase tracking-wider text-ice hover:text-frost">
            &larr; All posts
          </Link>
          <p className="mt-6 font-mono text-xs text-mist">
            {new Date(post.date).toLocaleDateString("en-ZA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {" · "}
            {post.readMinutes} min read
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl font-bold sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-5 text-[1.05rem] leading-relaxed text-frost/90">
          {post.body.map((para, i) => (
            <p key={i}>
              <RichText text={para} />
            </p>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl border border-line bg-gradient-to-br from-deep-2 to-deep-3 p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-frost/90">Not sure if this applies to your fridge? Ask us.</p>
          <a
            href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
            className="whitespace-nowrap rounded-full bg-red px-6 py-3 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Call {site.phones.mobile}
          </a>
        </div>
      </section>
    </>
  );
}
