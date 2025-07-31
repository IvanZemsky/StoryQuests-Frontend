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
}

export default nextConfig
