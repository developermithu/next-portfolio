import localFont from 'next/font/local'
import '@/app/global.css'
import Header from '@/components/Header'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1f2e] text-white min-h-screen font-sans`}>
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
