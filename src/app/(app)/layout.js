'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { GeistSans } from 'geist/font/sans'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className={`min-h-screen bg-gray-800 text-gray-100 ${GeistSans.className}`}>
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
