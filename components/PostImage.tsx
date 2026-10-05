import Image from "next/image";
import type { BlogPost } from "@/lib/content";

// Catalogue-style product photos sit on white, so they are shown contained on
// a clean light tile; real photos (e.g. the cold room) fill the frame.
export default function PostImage({
  post,
  className = "h-48",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  post: Pick<BlogPost, "image" | "imageAlt" | "imageFit">;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const cover = post.imageFit === "cover";
  return (
    <div
      className={`relative w-full overflow-hidden ${cover ? "bg-deep-3" : "bg-white"} ${className}`}
    >
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        className={cover ? "object-cover" : "object-contain p-3"}
      />
    </div>
  );
}
