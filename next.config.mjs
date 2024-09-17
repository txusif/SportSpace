/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaewztqgfgxxlzhbmcfo.supabase.co",
        pathname: "/storage/v1/object/public/turf-image/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
