import RegisterContent from "./RegisterContent"

const title = 'Register'

export const metadata = {
    title: title,
    openGraph: {
        title: title,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
    },
}

export default function Page() {
  return <RegisterContent />
}