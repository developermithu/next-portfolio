export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Link href="/">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </Link> */}

            {children}
        </div>
    )
}

export default Layout
