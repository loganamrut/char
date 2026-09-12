/** @type {import('next').NextConfig} */

// Sanitize basePath: Next.js strictly requires basePath to be either empty/undefined
// or start with a slash and NOT end with a slash. It CANNOT be "/"!
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const cleanBasePath =
  !rawBasePath || rawBasePath === '/'
    ? undefined
    : `/${rawBasePath.replace(/^\/+|\/+$/g, '')}`;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: cleanBasePath,
};

export default nextConfig;
