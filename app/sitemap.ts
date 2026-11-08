import type { MetadataRoute } from "next";
import { services, areas, landingServiceSlugs, blogPosts } from "@/lib/content";
import { brandPages, industryPages } from "@/lib/pages";

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

  const brandRoutes = ["/brands", ...brandPages.map((b) => `/brands/${b.slug}`)].map((path) => ({
    url: `${baseUrl}${path}/`,
  }));

  const industryRoutes = [
    "/industries",
    ...industryPages.map((i) => `/industries/${i.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}/`,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...landingRoutes,
    ...brandRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ];
}
