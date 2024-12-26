import AppClient from './AppClient'
import { GeistSans } from 'geist/font/sans'

const title = 'Dashboard'

export const metadata = {
    title: {
        default: title,
        template: 'Dashboard | %s',
    },
    description: '',
    keywords: '',
    openGraph: {
        title: {
            default: title,
            template: 'Dashboard | %s',
        },
        description: '',
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            default: title,
            template: 'Dashboard | %s',
        },
        description: '',
    },
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: false,
    },
}

const AppLayout = ({ children }) => {
    return (
        <div
            className={`min-h-screen bg-gray-800 text-gray-100 ${GeistSans.className}`}>
            <AppClient>{children}</AppClient>
        </div>
    )
}

export default AppLayout
