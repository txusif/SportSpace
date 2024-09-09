/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azgjqpwtzhbkkhbyybxz.supabase.co",
        pathname: "/storage/v1/object/public/turf-image/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
