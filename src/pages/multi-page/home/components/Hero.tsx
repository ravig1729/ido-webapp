import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import hero1 from '@/assets/img/shape/vl-hero-shape-1.1.png';
import hero2 from '@/assets/img/shape/vl-hero-shape-1.2.png';
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
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
                <a href="/pages/team" className="header-btn1">
                    Become a Volunteer<span>
                        <FaArrowRight />
                    </span>
                </a>
            </div>
            <div className="vl-hero-btn">
                <a href="/donation" className="header-btn1">
                    Donate now <span>
                        <FaArrowRight />
                    </span>
                </a>
            </div>
        </div>
    </div>
);

const Hero = () => {
    const settings = {
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        arrows: false,
        dots: false,
    };

    const sliderRef = useRef<Slider | null>(null);

    return (
        <div className="vl-banner p-relative fix">
            <Slider ref={sliderRef} {...settings} className="slider-active-1">
                <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
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

                <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
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

            <div className="vl-arrow">
                <span className="prev-arow slick-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                    <FaAngleRight />
                </span>
                <span className="next-arow slick-arrow" onClick={() => sliderRef.current?.slickNext()}>
                    <FaAngleLeft />
                </span>
            </div>
        </div>
    );
};

export default Hero;
