import { GeistSans } from 'geist/font/sans'

import '@/app/global.css'
import BlogHeader from '@/components/BlogHeader'

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

export const metadata = {
    title: 'Blog',
}

export default BlogLayout
