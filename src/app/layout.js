import { GeistSans } from 'geist/font/sans'

import '@/app/global.css'
import Header from '@/components/Header'

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={GeistSans.className}>
            <body
                className={`antialiased bg-[#1a1f2e] text-white min-h-screen font-sans`}>
                <Header />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Mithu Das - Full Stack Laravel Developer',
}

export default RootLayout
