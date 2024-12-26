export default function sitemap() {
    return [
      {
        url: process.env.NEXT_PUBLIC_BACKEND_URL,
        // lastModified: new Date(),
        // changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`,
        // lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }