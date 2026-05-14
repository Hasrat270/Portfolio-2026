import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MDX content under src/content/ is rendered at runtime via next-mdx-remote/rsc,
  // not imported as routes — no @next/mdx loader needed.
};

export default nextConfig;
