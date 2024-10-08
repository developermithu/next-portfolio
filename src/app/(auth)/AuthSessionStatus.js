const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-[#4fd1c5]`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
