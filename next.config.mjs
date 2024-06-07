/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apiexpresswebbeta.azurewebsites.net',
        port: '',
        pathname: '/api/v1/storage/blobs/**',
      },
      {
        protocol: 'https',
        hostname: 'imagenesbeta.blob.core.windows.net',
        port: '',
        pathname: '/imagenes/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7001',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.149',
        port: '7001',
      },
      {
        protocol: 'http',
        hostname: '192.168.100.51',
        port: '7001',
      },
    ],
  },
};

export default nextConfig;
