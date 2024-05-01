/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL_API: process.env.URL_API,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'apiexpresswebbeta.azurewebsites.net',
                port: '',
                pathname: '/api/v1/storage/blobs/**'
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
