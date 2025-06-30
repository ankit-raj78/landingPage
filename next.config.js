const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  
  // General optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['motion', 'clsx', 'tailwind-merge'],
  },
};

module.exports = withMDX(nextConfig);
