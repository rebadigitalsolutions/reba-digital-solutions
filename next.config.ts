import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rebadigitalsolutions.com" }],
        destination: "https://www.rebadigitalsolutions.com/:path*",
        permanent: true,
      },
      {
        // Workflow automation merged into the AI agents pillar.
        source: "/services/workflow-automation",
        destination: "/services/ai-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
