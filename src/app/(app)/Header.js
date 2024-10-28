const Header = ({ title }) => {
    return (
        <header className="bg-gray-700 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                <h2 className="font-semibold text-xl text-gray-200 leading-tight">
                    {title}
                </h2>
            </div>
        </header>
    )
}

export default Header