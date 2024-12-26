import LoginContent from "./LoginContent"

const title = 'Login'

export const metadata = {
  title: title,
  openGraph: {
    title: title,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
  },
}

export default function LoginPage() {
  return <LoginContent />
}

