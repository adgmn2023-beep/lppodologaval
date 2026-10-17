import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 672, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75],
  },
};

export default nextConfig;
