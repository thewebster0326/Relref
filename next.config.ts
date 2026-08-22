import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: this host has no Node.js runtime (no Apache Passenger),
  // so the site is built to plain HTML/CSS/JS and deployed via FTP.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
