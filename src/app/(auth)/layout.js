export const metadata = {
    title: 'Authentication | Developer Mithu',
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
