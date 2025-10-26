import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import hero1 from '@/assets/img/shape/vl-hero-shape-1.1.png';
import hero2 from '@/assets/img/shape/vl-hero-shape-1.2.png';
import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

// Reusable component for Hero Shapes
const HeroShapes = () => (
    <>
        <div className="vl-hero-shape shape-1">
            <img src={hero1} alt="hero1" />
        </div>
        <div className="vl-hero-shape shape-2">
            <img src={hero2} alt="hero2" />
        </div>
    </>
);

// // Reusable component for Hero Social Links
// const HeroSocial = () => (
//     <div className="vl-hero-social d-none d-lg-block">
//         <h4 className="title">Follow Us:</h4>
//         <div className="vl-hero-social-icon">
//             <ul>
//                 <li>
//                     <a className="d-flex align-items-center justify-content-center" href="#">
//                         <FaFacebookF />
//                     </a>
//                 </li>
//                 <li>
//                     <a className="d-flex align-items-center justify-content-center" href="#">
//                         <FaInstagram />
//                     </a>
//                 </li>
//                 <li>
//                     <a className="d-flex align-items-center justify-content-center" href="#">
//                         <FaTwitter />
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// );

// Reusable component for Hero Section Title
const HeroSectionTitle = () => (
    <div className="vl-hero-section-title">
        <h5 className="vl-subtitle">
            <span>
                <img src={titleIcon} alt="titleIcon" />
            </span>{' '}
            <span>Welcome to</span>
        </h5>
        <h1 className="vl-title text-anime-style-3">Indigenous Development Organization</h1>
        <p>
            Your contribution can help achieve a solution
        </p>
        <div className="vl-hero-btn-container" >
            <div className="vl-hero-btn">
                <a href="/pages/volunteer-form" className="header-btn1">
                    Become a Volunteer
                </a>
            </div>
            <div className="vl-hero-btn">
                <a href="/donation" className="header-btn1">
                    Donate now
                </a>
            </div>
        </div>
    </div>
);

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSwipping, setIsSwipping] = useState(false);
    const totalSlides = 6; // Number of hero slides

    // Custom swipe handlers for enhanced mobile experience
    const handleSwipeStart = () => {
        setIsSwipping(true);
    };

    const handleBeforeChange = (_current: number, next: number) => {
        setCurrentSlide(next);
    };

    const handleAfterChange = (current: number) => {
        setCurrentSlide(current);
        setIsSwipping(false);
    };

    const settings = {
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        arrows: false,
        dots: false,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
        // Enhanced mobile touch/swipe settings
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        accessibility: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    touchThreshold: 50, // Lower threshold for easier swiping on mobile
                    swipeToSlide: true,
                    swipe: true,
                    touchMove: true,
                    pauseOnHover: false,
                    speed: 300, // Faster transition on mobile
                }
            }
        ]
    };

    const sliderRef = useRef<Slider | null>(null);

    const goToSlide = (slideIndex: number) => {
        sliderRef.current?.slickGoTo(slideIndex);
    };

    return (
        <div className="vl-banner p-relative fix">
            <Slider 
                ref={sliderRef} 
                {...settings} 
                className={`slider-active-1 ${isSwipping ? 'swiping' : ''}`}
                onSwipe={handleSwipeStart}
                onInit={() => setIsSwipping(false)}
            >
                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-1 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-2 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-3 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-4 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-5 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg vl-hero-bg-6 slick-slide slick-current slick-active">
                    <HeroShapes />
                    {/* <HeroSocial /> */}
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <HeroSectionTitle />
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>
            </Slider>

            <div className="vl-dots-navigation d-none d-md-block">
                {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
