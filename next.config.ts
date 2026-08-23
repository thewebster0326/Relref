import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: this host has no Node.js runtime (no Apache Passenger),
  // so the site is built to plain HTML/CSS/JS and deployed via FTP.
  output: "export",
  // Apache resolves "/services/" to "services/index.html" automatically, but
  // has no rule for extensionless "/services" -> "services.html" without a
  // folder/file name clash (services/ also holds the service sub-pages).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
