import { GeistSans } from 'geist/font/sans'
import '@/app/global.css'

const title = 'Developer Mithu - Full Stack Laravel Developer'
const description = 'Full Stack Laravel Developer specializing in web development, API integration, and modern web applications'
const keywords = 'Laravel Developer, Full Stack Developer, Web Development, PHP, JavaScript, React'

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  authors: [{ name: 'Mithu' }],
  openGraph: {
    title: title,
    description: description,
    url: process.env.NEXT_PUBLIC_BACKEND_URL,
    siteName: 'Developer Mithu',
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Developer Mithu',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code',
  // },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className={`antialiased bg-[#1a1f2e] text-white min-h-screen font-sans`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
