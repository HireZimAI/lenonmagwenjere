/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deploys to Cloudflare Pages with zero adapters.
  // Build command: `npm run build`  |  Output directory: `out`
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Fonts load via <link> in the browser, so the build never needs network access.
  optimizeFonts: false,
};
export default nextConfig;
