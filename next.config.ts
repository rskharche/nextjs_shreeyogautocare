import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProd ? "/nextjs_shreeyogautocare" : "",

  assetPrefix: isProd
    ? "/nextjs_shreeyogautocare/"
    : "",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.31.85"],
};

export default nextConfig;;