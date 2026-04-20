/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['drive.google.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
