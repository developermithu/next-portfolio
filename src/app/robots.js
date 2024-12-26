export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/admin/',
          '/private/',
          '/login/',
          '/register/',
          '/verify-email/',
          '/reset-password/',
          '/forgot-password/',
        ],
      },
      sitemap: `${process.env.NEXT_PUBLIC_BACKEND_URL}/sitemap.xml`,
    }
  }

