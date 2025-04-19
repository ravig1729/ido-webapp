import BackToTop from "@/components/BackToTop.tsx"
import Footer from "@/components/layouts/Footer"
import TopBanner from "@/components/layouts/TopBanner.tsx"
import TopBar from "@/components/layouts/TopBar"
import About from './components/About'
import Causes from './components/Causes'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const HomePage = () => {
    return (
        <>
            <TopBanner/>
            <TopBar/>
            <Hero/>
            <About/>
            <Causes/>
            <Testimonial/>
            <Gallery/>
            <Team/>
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default HomePage
