/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "media.graphcms.com"],
    formats: ["image/webp"],
  },
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

module.exports = nextConfig;
