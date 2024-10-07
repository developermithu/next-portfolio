import { GeistSans } from 'geist/font/sans'

import '@/app/global.css'

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

export const metadata = {
    title: 'Mithu Das - Full Stack Laravel Developer',
}

export default RootLayout
