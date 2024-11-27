/** @type {import('next').NextConfig} */

module.exports = {
  distDir: "dist",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3101",
        pathname: "/assets/**",
      },
    ],
  },
}
