import ForgotPasswordContent from './ForgotPasswordContent'

const title = 'Forgot Password'

export const metadata = {
    title: title,
    openGraph: {
        title: title,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/forgot-password`,
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
    },
}

export default function Page() {
    return <ForgotPasswordContent />
}
