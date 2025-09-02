import ctaImg1 from '@/assets/img/banner/banner4.jpg'
import arrowImg from '@/assets/img/shape/vl-arow-shap-1.1.png'
import shapeImg1 from '@/assets/img/shape/vl-cta-1.1.png'
import shapeImg2 from '@/assets/img/shape/vl-cta-1.2.png'

import { FaArrowRight } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CtaArea = () => {
    return (
        <section id="contact" className="vl-cta">
            <Container>
                <div className="vl-cta-bg" style={{ backgroundImage: `url(${ctaImg1})` }}>
                    <div className="vl-cta-shap dot-shap">
                        <img src={arrowImg} alt='arrowImg' />
                    </div>
                    <div className="vl-cta-shap shap-1"><img src={shapeImg1} alt='shapeImg1' /></div>
                    <div className="vl-cta-shap shap-2"><img src={shapeImg2} alt='shapeImg2' /></div>
                    <Row>
                        <Col lg={12}>
                            <div className="vl-cta-content text-center">
                                <h2 className="title">Your Help Can Change Lives</h2>
                                <p>Every action, no matter how small, can make a world of difference in <br /> the lives
                                    of those affected by disaster. Whether it’s a donation.</p>
                                <div className="vl-cta-form text-center mx-auto">
                                    <div className="btn-area">
                                        <Link to="/donation" className="header-btn1 pr-10">Donate <span><FaArrowRight
                                            className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default CtaArea