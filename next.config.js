/** @type {import('next').NextConfig} */

module.exports = {
  distDir: "dist",
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
