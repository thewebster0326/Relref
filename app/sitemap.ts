import type { MetadataRoute } from "next";
import { services, areas, landingServiceSlugs, blogPosts } from "@/lib/content";

export const dynamic = "force-static";

const baseUrl = "https://relref.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/contact", "/blog"].map(
    (path) => ({
      url: `${baseUrl}${path}/`,
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}/`,
  }));

  const landingRoutes = landingServiceSlugs.flatMap((slug) =>
    areas.map((area) => ({
      url: `${baseUrl}/services/${slug}/${area.slug}/`,
    }))
  );

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...landingRoutes, ...blogRoutes];
}
