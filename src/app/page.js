import LoginLinks from '@/app/LoginLinks'
import About from '@/components/About'
import HeroSection from '@/components/HeroSection'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            {/* <LoginLinks /> */}
            <HeroSection />
            <About />
        </>
    )
}

export default Home
