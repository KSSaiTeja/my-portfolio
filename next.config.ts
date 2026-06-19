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
    ],
  },
};

export default nextConfig;
