import BackToTop from "@/components/BackToTop.tsx"
import CtaArea from '@/components/layouts/CtaArea'
import Footer from '@/components/layouts/Footer'
import TopBanner from '@/components/layouts/TopBanner'
import About from './components/About'
import Blog from './components/Blog'
import EventArea from './components/EventArea'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const HomeSinglePage = () => {
    return (
        <>
            <TopBanner/>
            <Header/>
            <Hero/>
            <About/>
            <EventArea/>
            <Testimonial/>
            <Gallery/>
            <Team/>
            <Blog/>
            <CtaArea/>
            <Footer/>
            <BackToTop/>
        </>

    )
}

export default HomeSinglePage