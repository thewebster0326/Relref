import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostImage from "@/components/PostImage";
import RichText from "@/components/RichText";
import { blogPosts, site, type BodyBlock } from "@/lib/content";

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
    openGraph: { images: [post.image] },
  };
}

function Block({ block }: { block: BodyBlock }) {
  if (typeof block === "string") {
    if (block.startsWith("## ")) {
      return (
        <h2 className="mt-6 font-display text-2xl font-semibold text-frost">
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p>
        <RichText text={block} />
      </p>
    );
  }

  if ("list" in block) {
    return (
      <ul className="flex flex-col gap-2.5 pl-1">
        {block.list.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-ice" />
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <figure className="my-4">
      <div className="relative h-72 overflow-hidden rounded-2xl border border-line bg-white">
        <Image
          src={block.image}
          alt={block.alt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className={block.image.includes("coldroom") ? "object-cover" : "object-contain p-4"}
        />
      </div>
      {block.caption && (
        <figcaption className="mt-3 text-center font-mono text-xs text-mist">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(-3).reverse();

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
          <p className="mt-5 text-lg leading-relaxed text-mist">{post.excerpt}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pt-12 sm:px-8">
        <PostImage
          post={post}
          className="h-72 rounded-2xl border border-line sm:h-96"
          sizes="(min-width: 768px) 768px, 100vw"
          priority
        />
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-5 text-[1.05rem] leading-relaxed text-frost/90">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
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
      </article>

      <section className="border-t border-line bg-deep-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Keep reading
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-deep-2/60 transition-colors hover:border-ice"
              >
                <PostImage post={p} className="h-36" />
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
