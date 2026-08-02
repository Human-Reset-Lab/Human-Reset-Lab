import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for Hostinger Node.js hosting compatibility
  output: "standalone",

  // Strict React mode
  reactStrictMode: true,

  // Production image optimisation config (no external domains needed at foundation stage)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
