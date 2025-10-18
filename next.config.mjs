/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  // Disable source maps in both production and development to prevent 404 errors
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    // Disable source maps in development mode
    config.devtool = false;
    return config;
  },
};
export default nextConfig;
