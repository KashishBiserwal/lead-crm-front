/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "standalone"  // will be uncommented when docker is configured on server
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3003',
            },
            {
                protocol: 'http',
                hostname: '45.198.13.48',
            },
        ],
    },
};

export default nextConfig;
