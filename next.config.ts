import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/nextjs_shreeyogautocare",

  assetPrefix: "/nextjs_shreeyogautocare/",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.31.85"],
};

export default nextConfig;