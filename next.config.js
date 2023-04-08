/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "upload.wikimedia.org",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
