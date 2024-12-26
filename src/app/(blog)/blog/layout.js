import { GeistSans } from 'geist/font/sans'

import '@/app/global.css'
import BlogHeader from '@/components/BlogHeader'

const title = 'Developer Mithu Blog'
const description = 'Developer Mithu Blog' 
const keywords = 'Laravel Tips, Web Development, PHP, JavaScript, React, Next.js' 

export const metadata = {
    title: {
        default: title,
        template: 'Blog | %s',
    },
    description: description,
    keywords: keywords,
    openGraph: {
        title: title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`,
        // images: [
        //   {
        //     url: '/og-image.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Developer Mithu',
        //   },
        // ],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        // images: ['/og-image.jpg'],
      },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`,
    },
}

const BlogLayout = ({ children }) => {
    return (
        <html lang="en" className={GeistSans.className}>
            <body
                className={`antialiased bg-[#1a1f2e] text-white min-h-screen font-sans`}>
                <BlogHeader />  

                {children}
            </body>
        </html>
    )
}

export default BlogLayout
