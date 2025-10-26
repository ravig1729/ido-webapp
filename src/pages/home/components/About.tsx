import aboutIcons1 from '@/assets/img/icons/vl-about-1.1.svg'
import aboutIcons2 from '@/assets/img/icons/vl-about-1.2.svg'
import about1 from '@/assets/img/about/vl-about-1.1.png'
import about2 from '@/assets/img/about/vl-about-1.2.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
    return (
        <section className="vl-about-section sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-content">
                            <div className="vl-section-title-1">
                                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800}
                                    data-aos-delay={300}>About Us</h5>
                                <h2 className="title text-anime-style-3">Focusing on Interior Tribal Habitations of Bhadrachalam</h2>
                                <p
                                    style={{ paddingBottom: '1rem' }}
                                    data-aos="fade-right"
                                    data-aos-duration={800}
                                    data-aos-delay={300}
                                >
                                    Since 2017, I-DO has been dedicated to delivering primary healthcare to tribal communities in the remote habitations and rural villages of Bhadradri-Kothagudem district, Telangana. It has recently expanded its services to Sukma district, Chhattisgarh, guided by its core motto: ‘Reaching the Unreachable’.{" "}
                                    <a
                                        href="/about"
                                        style={{
                                            color: '#1d4ed8',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Read More
                                    </a>
                                </p>
                            </div>
                            <div className="vl-about-grid">
                                <div className="vl-about-icon-box mb-30">
                                    <div className="vl-about-icon">
                                        <span><img src={aboutIcons1} alt='about1' /></span>
                                    </div>
                                    <div className="vl-icon-content">
                                        <h3 className="title"><Link to="/pages/service">Helping people rebuild and
                                            prepare</Link></h3>
                                        <p>We help them rebuild stronger more resilient <br /> for the future. Together
                                            with supporters like.</p>
                                    </div>
                                </div>
                                <div className="vl-about-icon-box mb-30">
                                    <div className="vl-about-icon">
                                        <span><img src={aboutIcons2} alt='about2' /></span>
                                    </div>
                                    <div className="vl-icon-content">
                                        <h3 className="title"><Link to="/pages/service">Putting people first in
                                            everything we do</Link></h3>
                                        <p>Guided by compassion driven the belief that every act kindness makes a
                                            difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="mb-30">
                        <div className="vl-about-large-thumb reveal">
                            <img className="w-100" src={about1} alt='about1' />
                        </div>
                    </Col>
                    <Col lg={2} md={6} className="mb-30">
                        <div className="vl-about-sm-content" data-aos="zoom-in-up" data-aos-duration={1000}
                            data-aos-delay={300}>
                            <p>At the heart of our motto, lies a simple yet powerful mission to deliver health care to the remotest areas in the country.</p>
                            <div className="btn-area">
                                <Link to="/pages/team"
                                    className="header-btn1">Our Team<span><FaArrowRight /></span></Link>
                            </div>
                            <div className="vl-about-sm-thumb d-none d-md-block">
                                <img className="w-100" src={about2} alt='about2' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About