import Header from '@/components/Header'
import AboutSection from '@/components/sections/AboutSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectSection from '@/components/sections/ProjectSection'
import { ServiceSection } from '@/components/sections/ServiceSection'

export const metadata = {
    title: 'Mithu Das - Full Stack Laravel Developer',
}

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectSection />
            <BlogSection />
            <ContactSection />
            {/* <Footer /> */}
        </>
    )
}

export default Home
