import type { NextConfig } from "next";
import { ASSET_PREFIX } from "./lib/assetPrefix";

const nextConfig: NextConfig = {
  // Served from mekark.com/cold-storage-warehouse/ via a rewrite in the main site, so
  // all assets must live under a prefix that does not collide with the main site's /_next.
  assetPrefix: ASSET_PREFIX,
  async rewrites() {
    // Keep the standalone subdomain working: map the prefixed paths back to the real ones.
    return [{ source: `${ASSET_PREFIX}/:path*`, destination: "/:path*" }];
  },
  turbopack: {
    // Pin the root to this project; a stray lockfile in a parent folder
    // otherwise makes Next.js pick the wrong workspace root
    root: __dirname,
  },
  images: {
    path: `${ASSET_PREFIX}/_next/image`,
    // Serve AVIF where supported (smaller than WebP), WebP otherwise
    formats: ["image/avif", "image/webp"],
    // Finer breakpoints so phones get a closer-sized image instead of the next big step up
    qualities: [50, 55, 75],
    deviceSizes: [360, 414, 480, 560, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    // Inline the (small, Tailwind) stylesheet into the HTML so it no longer
    // blocks first render with a separate request
    inlineCss: true,
  },
};

export default nextConfig;
