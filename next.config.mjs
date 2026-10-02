/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
