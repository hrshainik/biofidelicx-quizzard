/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/quiz-page/1",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
