export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/login/',
          '/register/',
          '/verify-email/',
          '/reset-password/',

        ],
      },
      sitemap: `${process.env.NEXT_PUBLIC_BACKEND_URL}/sitemap.xml`,
    }
  }

