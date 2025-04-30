import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/dh0apn34n/**")],
  },
};

export default nextConfig;
