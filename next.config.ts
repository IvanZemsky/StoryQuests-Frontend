import type { NextConfig } from "next"

const nextConfig: NextConfig = {
   transpilePackages: ["msw"],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
   turbopack: {
      rules: {
         "*.svg": {
            loaders: ["@svgr/webpack"],
            as: "*.js",
         },
      },
   },
}

export default nextConfig
