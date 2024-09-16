/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "assets.aceternity.com", "api.microlink.io", "static.vecteezy.com",
            "images.unsplash.com",
        ]
    },

};

export default nextConfig;
