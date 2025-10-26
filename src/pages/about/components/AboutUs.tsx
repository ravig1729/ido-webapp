import aboutThum1 from '@/assets/img/about/vl-about-thum-inner-sm-1.1.png'
import aboutThum2 from '@/assets/img/about/vl-about-thum-inner-sm-1.2.png'
import aboutThum3 from '@/assets/img/about/vl-about-1.2.png'
import aboutThum4 from '@/assets/img/about/vl-about-thum-inner-large-1.3.png'
import aboutThum5 from '@/assets/img/about/vl-about-1.1.png'
import aboutThum6 from '@/assets/img/about/vl-about-mission-thumb.png'
import aboutThum7 from '@/assets/img/about/vl-vission2.png'
import idoImg1 from '@/assets/img/ido/1.jpg'
import idoImg2 from '@/assets/img/ido/2.jpg'
import idoImg3 from '@/assets/img/ido/3.jpg'
import idoImg4 from '@/assets/img/ido/4.jpg'
import idoImg5 from '@/assets/img/ido/5.jpg'
import familyPlanning from '@/assets/img/ido/Family Planning Surgeries 2.jpg'
import hbncSession from '@/assets/img/ido/Session for HBNC.jpg'
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const AboutUs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSwipping, setIsSwipping] = useState(false);
    
    const aboutImages = [
        { src: aboutThum1, alt: 'I-DO Healthcare Services', className: 'vl-sm-thumb' },
        { src: aboutThum2, alt: 'Community Outreach Programs', className: 'vl-sm-thumb2' },
        { src: aboutThum3, alt: 'Educational Initiatives', className: 'vl-sm-thumb2' },
        { src: aboutThum4, alt: 'Medical Facilities', className: 'large-thumb' },
        { src: aboutThum5, alt: 'Tribal Community Support', className: 'vl-sm-thumb' },
        { src: aboutThum6, alt: 'Mission and Vision', className: 'vl-sm-thumb2' },
        { src: aboutThum7, alt: 'Vision for Future', className: 'large-thumb' },
        { src: idoImg1, alt: 'I-DO Community Work', className: 'vl-sm-thumb' },
        { src: idoImg2, alt: 'Healthcare Outreach', className: 'vl-sm-thumb2' },
        { src: idoImg3, alt: 'Medical Care Services', className: 'vl-sm-thumb2' },
        { src: idoImg4, alt: 'Community Health Programs', className: 'large-thumb' },
        { src: idoImg5, alt: 'Rural Healthcare', className: 'vl-sm-thumb' },
        { src: familyPlanning, alt: 'Family Planning Services', className: 'vl-sm-thumb2' },
        { src: hbncSession, alt: 'HBNC Training Session', className: 'large-thumb' }
    ];

    // Enhanced swipe handlers for mobile experience
    const handleSwipeStart = () => {
        setIsSwipping(true);
    };

    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.realIndex);
    };

    const handleTouchEnd = () => {
        setIsSwipping(false);
    };

    const renderImageItem = (image: { src: string; alt: string; className: string }) => (
        <div className={`${image.className} mb-30 slider-image-container`}>
            <img 
                className="w-100 slider-image" 
                src={image.src} 
                alt={image.alt}
                style={{
                    objectFit: 'cover',
                    height: '300px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
            />
        </div>
    );

    return (
        <section className="vl-about5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-content">
                            <div className="vl-section-title-1 mb-50">
                                <h5 className="subtitle">About Us</h5>
                                <br></br>
                                <p>I-DO is the brainchild of Dr R Narendar who always had the passion to serve the needy & the neglected population.</p>
                                <br></br>
                                <p>I-DO has been actively working with tribal communities in the remote habitations and rural
                                    villages of Bhadradri, Kothagudem district, Telangana, since 2017, with the core motto of
                                    &#39;Reaching the Unreachable&#39;.</p>
                            </div>
                            
                            {/* Responsive Slider View - All Screen Sizes */}
                            <div className={`${isSwipping ? 'swipping' : ''}`}>
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: ".about-swiper-button-next",
                                        prevEl: ".about-swiper-button-prev",
                                    }}
                                    loop
                                    spaceBetween={20}
                                    speed={500}
                                    // Enhanced mobile touch/swipe settings
                                    touchRatio={1}
                                    touchAngle={45}
                                    threshold={10}
                                    allowTouchMove={true}
                                    simulateTouch={true}
                                    grabCursor={true}
                                    // Mobile-optimized resistance
                                    resistance={true}
                                    resistanceRatio={0.85}
                                    // Responsive breakpoints
                                    breakpoints={{
                                        320: { 
                                            slidesPerView: 1, 
                                            spaceBetween: 20 
                                        },
                                        768: { 
                                            slidesPerView: 1, 
                                            spaceBetween: 30 
                                        },
                                        1024: { 
                                            slidesPerView: 1, 
                                            spaceBetween: 40 
                                        }
                                    }}
                                    // Swipe event handlers
                                    onTouchStart={handleSwipeStart}
                                    onTouchEnd={handleTouchEnd}
                                    onSlideChange={handleSlideChange}
                                    // Accessibility
                                    a11y={{
                                        prevSlideMessage: 'Previous image',
                                        nextSlideMessage: 'Next image',
                                    }}
                                >
                                    {aboutImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            {renderImageItem(image)}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                
                        

                                {/* Slide indicators for all screen sizes */}
                                <div className="about-slide-indicators d-flex justify-content-center mt-2">
                                    {aboutImages.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`indicator-dot ${currentSlide === index ? 'active' : ''} ${isSwipping ? 'swipping' : ''}`}
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: currentSlide === index ? '#007bff' : '#dee2e6',
                                                margin: '0 4px',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content2 ml-20">
                            <div className="content mb-30">
                                <p>At I-DO, we work with an objective of providing universal, affordable accessible Primary Health Care (PHC) and Education to the most underserved and marginalized population in remote tribal areas.</p>
                                <div className="icon-list-box box2">
                                    <ul >
                                        <li style={{fontWeight: "normal"}}>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Mobile Healthcare & Outreach:</strong> Mobile Medical Units (MMUs) are set up to provide Primary Health Care services focusing on Mother and Child Health.
                                        </li>
                                        <li style={{fontWeight: "normal"}}>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Community Health Workers:</strong> Identification, Training and Capacity Building of Community Health Workers (CHWs).
                                        </li>
                                        <li style={{fontWeight: "normal"}}>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Education & Early Childhood Programs:</strong> Establishing Bridge Schools in the areas that lack access to Formal Education like Anganwadis to provide Early Childhood Education 
                                        </li>
                                        <li style={{fontWeight: "normal"}}>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Health Education:</strong> Promoting health awareness and Behavioral Change Communication (BCC) through Street Plays (Nukkad Natak) and improving health-seeking behaviour.
                                        </li>
                                    </ul>
                                </div>
                                <p>We are glad to have been able to reach more than 40, 000 tribal population with the unwavering support of 9 Doctors, 103 Community Health Workers, 4 Mobile Medical Units (MMUs), 30 Staff who are always on the toes to help the mankind.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AboutUs