import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/hero/**",
      },
      {
        pathname: "/portfolio/**",
      },
      {
        pathname: "/case-studies/**",
      },
    ],
  },
};

export default nextConfig;
