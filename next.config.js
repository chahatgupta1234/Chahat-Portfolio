/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export mode to fix CSS loading issues
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
