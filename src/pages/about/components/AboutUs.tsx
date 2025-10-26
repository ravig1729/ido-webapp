import aboutThum1 from '@/assets/img/about/vl-about-thum-inner-sm-1.1.png'
import aboutThum2 from '@/assets/img/about/vl-about-thum-inner-sm-1.2.png'
import aboutThum3 from '@/assets/img/about/vl-about-1.2.png'
import aboutThum4 from '@/assets/img/about/vl-about-thum-inner-large-1.3.png'
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
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
                            <Row>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb mb-30">
                                        <img className="w-100" src={aboutThum1} alt='aboutThum1' />
                                    </div>
                                </Col>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb2 mb-30">
                                        <img className="w-100" src={aboutThum2} alt='aboutThum2' />
                                    </div>
                                </Col>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb2 mb-30">
                                        <img className="w-100" src={aboutThum3} alt='aboutThum3' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content2 ml-20">
                            <div className="large-thumb mb-30">
                                <img className="w-100" src={aboutThum4} alt='aboutThum4' />
                            </div>
                            <div className="content mb-30">
                                <p>At I-DO, we work with an objective of providing universal, affordable accessible Primary Health Care (PHC) and Education to the most underserved and marginalized population in remote tribal areas.</p>
                                <div className="icon-list-box box2">
                                    <ul>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Mobile Healthcare & Outreach:</strong> Mobile Medical Units (MMUs) are set up to provide Primary Health Care services focusing on Mother and Child Health.
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Community Health Workers:</strong> Identification, Training and Capacity Building of Community Health Workers (CHWs).
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Education & Early Childhood Programs:</strong> Establishing Bridge Schools in the areas that lack access to Formal Education like Anganwadis to provide Early Childhood Education 
                                        </li>
                                        <li>
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
        </section>
    )
}

export default AboutUs