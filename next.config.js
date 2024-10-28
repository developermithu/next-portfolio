const nextConfig = {
    async rewrites() {
        return [
            // For nested routes /blog/posts
            {
                source: '/blog/posts/backend/:path*',
                destination: process.env.NEXT_PUBLIC_BACKEND_URL + '/:path*',
            },
            {
                source: '/backend/:path*',
                destination: process.env.NEXT_PUBLIC_BACKEND_URL + '/:path*',
            },
        ]
    },
}

module.exports = nextConfig
