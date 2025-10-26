import {testimonialData} from '../data'
import qutImg from '@/assets/img/icons/vl-qut-1.1.svg'
import {FaStar} from "react-icons/fa6";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
import {Autoplay, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Container, Row} from 'react-bootstrap'


const Testimonial = () => {
    return (
        <section className="vl-testimonial vl-testimonial-bg sp1">
            <Container>
                <div className="vl-section-title-1 white mb-60 text-center">
                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800}
                        data-aos-delay={300}>Testimonial</h5>
                    <h2 className="title text-anime-style-3">Stories from the Heart</h2>
                 <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Tales from the individuals who support our grassroots work in tribal habitations.</p>
                </div>
                <Row>
                    <div className="vl-testimonial-arow p-relative">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                320: {slidesPerView: 1, spaceBetween: 10}, // For small screens
                                768: {slidesPerView: 2, spaceBetween: 20}, // For tablets
                                1024: {slidesPerView: 3, spaceBetween: 30}, // For desktops
                            }}
                            loop
                            spaceBetween={30}
                        >
                            <div id="testimoni1" className="owl-carousel owl-theme">
                                {
                                    testimonialData?.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div 
                                                className="vl-testimonial-box p-relative"
                                                style={{
                                                    height: '350px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div className="vl-testimonial-box-icon">
                                                    <span><FaStar className="fa-solid fa-star"/></span>
                                                    <span><FaStar className="fa-solid fa-star"/></span>
                                                    <span><FaStar className="fa-solid fa-star"/></span>
                                                    <span><FaStar className="fa-solid fa-star"/></span>
                                                    <span><FaStar className="fa-solid fa-star"/></span>
                                                </div>
                                                <div 
                                                    className="vl-testimonial-box-content"
                                                    style={{
                                                        flex: '1',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        minHeight: '120px',
                                                        maxHeight: '120px',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <p 
                                                        style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 4,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            lineHeight: '1.5'
                                                        }}
                                                    >
                                                        {item.quote}"
                                                    </p>
                                                </div>
                                                <div 
                                                    className="vl-testimonial-box-auth"
                                                    style={{
                                                        marginTop: 'auto'
                                                    }}
                                                >
                                                    <div className="vl-auth-desc">
                                                        <div className="auth-img">
                                                            <img 
                                                                src={item.image} 
                                                                alt='testimonial-img'
                                                                style={{
                                                                    width: '60px',
                                                                    height: '60px',
                                                                    objectFit: 'cover',
                                                                    borderRadius: '50%',
                                                                    border: '2px solid #f8f9fa'
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="auth-title">
                                                            <h4 className="title"><a href="#">{item.name}</a></h4>
                                                            <span>{item.role}</span>
                                                        </div>
                                                    </div>
                                                    <div className="vl-auth-quote">
                                                        <span><img src={qutImg} alt='qutImg'/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>
                        </Swiper>
                        <div className='owl-nav d-none d-md-block'>
                            <button className="owl-prev swiper-button-prev">
                                <img src={arrowLeft} alt="arrowLeft"/>
                            </button>

                            <button className="owl-next swiper-button-next">
                                <img src={angleRight} alt="angleRight"/>
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial