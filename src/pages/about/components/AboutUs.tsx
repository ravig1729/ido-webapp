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
                                <p>I-DO is the Brainchild of Dr R Narendar who always had the passion to serve the needy &amp;
                                    the neglected population.</p>
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
                                <p>At I-DO, we work with an objective of providing universal, affordable &amp; comprehensive
                                    Primary Health Care (PHC) to the most underserved and marginalized population in remote
                                    tribal/ hilly and /or insurgency areas.</p>
                                <div className="icon-list-box box2">
                                    <ul>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Mobile Healthcare &amp; Outreach:</strong> Mobile Medical Units (MMUs) are set up to provide
                                            essential services like immunizations, antenatal care, and family planning.
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Community Health Workers:</strong> Trained local individuals as health workers to offer
                                            primary care and maternal support, improving health education.
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Education &amp; Early Childhood Programs:</strong> Established Make-shift Study Centers
                                            called Bridge Schools. that enhance literacy and reduce dropout rates. They help
                                            bridge the educational gap by offering basic education, enabling children to
                                            eventually transition to mainstream schools.
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Awareness Campaigns:</strong> Promoting health and cultural awareness to challenge
                                            harmful practices and improve health-seeking behaviour with the help of Street Play
                                            ‘Nukkad Natak’.
                                        </li>
                                        <li>
                                            <span><FaCheck className="fa-solid fa-check" /></span>
                                            <strong>Nutritional Support:</strong> Implement feeding programs to combat malnutrition and
                                            educate on proper nutrition for children and pregnant women.
                                        </li>
                                    </ul>
                                </div>
                                <p>We are glad to have been able to reach more than 20, 000 tribal population with the
                                    unwavering support of 9 Doctors, 103 Community Health Workers, 4 Mobile Medical Units
                                    (MMUs), 30 Staff who are always on the toes to help the mankind.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs