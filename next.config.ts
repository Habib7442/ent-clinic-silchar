import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:lang(en|bn)/site.webmanifest",
        destination: "/site.webmanifest",
      },
    ];
  },
};

export default nextConfig;
