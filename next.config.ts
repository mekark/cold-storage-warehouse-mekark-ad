import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root to this project; a stray lockfile in a parent folder
    // otherwise makes Next.js pick the wrong workspace root
    root: __dirname,
  },
  images: {
    // Serve AVIF where supported (smaller than WebP), WebP otherwise
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Inline the (small, Tailwind) stylesheet into the HTML so it no longer
    // blocks first render with a separate request
    inlineCss: true,
  },
};

export default nextConfig;
