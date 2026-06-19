import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/hero/**",
      },
    ],
  },
};

export default nextConfig;
