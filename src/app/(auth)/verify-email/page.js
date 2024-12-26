import VerifyEmailContent from "./VerifyEmailContent"

const title = 'Verify Email'

export const metadata = {
    title: title,
    openGraph: {
        title: title,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-email`,
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
    },
}

export default function Page() {
    return <VerifyEmailContent />
}