const title = 'Authentication | Developer Mithu'

export const metadata = {
    title: {
        default: title,
        template: '%s | Developer Mithu',
    },
    description: '',
    keywords: '',
    openGraph: {
        title: {
            default: title,
            template: '%s | Developer Mithu',
        },
        description: '',
      },
      twitter: {
        title: {
            default: title,
            template: '%s | Developer Mithu',
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

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Link href="/">
                <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
            </Link> */}

            {children}
        </div>
    )
}

export default Layout
