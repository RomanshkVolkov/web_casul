/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '7001'                
            },
            {
                protocol: 'http',
                hostname: '192.168.1.149',
                port: '7001'
            }
        ]
    }
};

export default nextConfig;
