/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",        // rota do frontend
        destination: "https://api-psicanalise.onrender.com/:path*", // destino (backend)
      },
    ];
  },
};

export default nextConfig;
