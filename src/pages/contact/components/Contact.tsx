import { Col, Container, Row } from 'react-bootstrap'
// import { FaArrowRight } from 'react-icons/fa6'
// import Select from 'react-select'

// const options = [
//     { value: '', label: 'Donation To' },
//     { value: 1, label: 'Health and Medical Support' },
//     { value: 2, label: 'Education and Training' },
//     { value: 3, label: 'Relief and Aid Services' },
//     { value: 4, label: 'Community Development' },
//     { value: 5, label: 'Environmental Conservation' }
// ];

const Contact = () => {
    return (
        <section className="vl-contact-section-inner sp2">
            <Container>
                <Row className=" flex-lg-row flex-column-reverse">
                    <Col lg={12} className="mb-30">
                        <div className="vl-maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1320.1219873775833!2d84.09346563540738!3d18.35208505091066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c47e4452eee79%3A0x89cf4a2efc0e1cc0!2sDola%20Primary%20Health%20Sub%20Center!5e0!3m2!1sen!2sin!4v1745343298320!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                        </div>
                    </Col>
                    {/* <Col lg={6} className="mb-30">
                        <div className="vl-section-content ml-50">
                            <div className="section-title">
                                <h4 className="subtitle">Contact Us</h4>
                                <h2 className="title">Reach Together, We Can Make a Difference</h2>
                                <p className="para pb-32">We’re here to answer questions, provide information about
                                    our <br /> work, and help you find ways to get involved whetherinterested.</p>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Contact