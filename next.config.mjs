/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL_API: process.env.NEXT_PUBLIC_URL_API,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'apiexpresswebbeta.azurewebsites.net',
                port: '443'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '7001'                
            },
            {
                protocol: 'http',
                hostname: '192.168.1.149',
                port: '7001'
            },
            {
                protocol: 'http',
                hostname: '192.168.100.51',
                port: '7001'
            }
        ]
    }
};

export default nextConfig;
