import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vendas.redeservpro.com.br",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "redeservpro.com.br",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.ppa.com.br",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;
