import gallerySearch from '@/assets/img/icons/vl-gallery-search-1.1.svg'
import galleryImg1 from '@/assets/img/gallery/vl-gallery-1.1.png'
import galleryImg2 from '@/assets/img/gallery/vl-gallery-1.2.png'
import galleryImg3 from '@/assets/img/gallery/vl-gallery-1.3.png'
import galleryImg4 from '@/assets/img/gallery/vl-gallery-1.4.png'
import galleryImg5 from '@/assets/img/gallery/vl-gallery-1.5.png'
import galleryImg6 from '@/assets/img/gallery/vl-gallery-1.6.png'
import { Col, Container, Row } from 'react-bootstrap'
import GlightBox from "@/components/GlightBox";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Gallery = () => {
    const galleryImages = [
        { src: galleryImg1, alt: 'galleryImg1' },
        { src: galleryImg2, alt: 'galleryImg2' },
        { src: galleryImg3, alt: 'galleryImg3' },
        { src: galleryImg4, alt: 'galleryImg4' },
        { src: galleryImg5, alt: 'galleryImg5' },
        { src: galleryImg6, alt: 'galleryImg6' }
    ];

    const renderGalleryItem = (image: { src: string; alt: string }, index: number) => (
        <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={800 + (index * 100)}
            data-aos-delay={300}>
            <img className="w-100" src={image.src} alt={image.alt} />
            <a href={image.src} className="glightbox search-ic">
                <span><img src={gallerySearch} alt='gallerySearch' /></span>
            </a>
        </div>
    );

    return (
        <section id='gallery' className="vl-gallery sp2">
            <Container>
                <div className="vl-gallery-content mb-60">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Our
                            Gallery</h5>
                        <h2 className="title text-anime-style-3">The Frontlines of Relief</h2>
                    </div>
                </div>
                <GlightBox>
                    {/* Mobile/Tablet Slider View */}
                    <div className="d-lg-none">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".gallery-swiper-button-next",
                                prevEl: ".gallery-swiper-button-prev",
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 }, // Mobile
                                768: { slidesPerView: 2, spaceBetween: 30 }, // Tablet
                            }}
                            loop
                            spaceBetween={20}
                        >
                            {galleryImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    {renderGalleryItem(image, index)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Navigation buttons for slider */}
                        <div className="gallery-nav-buttons d-none d-md-flex justify-content-center mt-4">
                            <button className="gallery-swiper-button-prev btn btn-outline-primary me-3">
                                Previous
                            </button>
                            <button className="gallery-swiper-button-next btn btn-outline-primary">
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Desktop Grid View */}
                    <div className="d-none d-lg-block">
                        <Row>
                            {galleryImages.map((image, index) => (
                                <Col lg={6} md={6} className="mb-30" key={index}>
                                    {renderGalleryItem(image, index)}
                                </Col>
                            ))}
                        </Row>
                    </div>
                </GlightBox>
            </Container>
        </section>
    )
}

export default Gallery
