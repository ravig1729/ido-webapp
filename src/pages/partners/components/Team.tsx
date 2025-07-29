import { teamData } from '../data'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Col, Container, Row } from 'react-bootstrap';

const Team = () => {
    return (
        <section className="vl-team-inner sp2">
            <Container>
                <div className="vl-section-content">
                    <h2 className="title pb-20">Our Partners</h2>
                </div>
                <Row>
                    {
                        teamData.map((item, idx) => (
                            <Col lg={4} md={6} key={idx}>
                                <div className="single-team">
                                    <div className="team-thumb">
                                        <img className="w-100 img-fluid" src={item.image} alt='img' />
                                    </div>
                                    <div className="p-relative">
                                        <div className="content-box">
                                            <div className="ssocial">
                                                <ul>
                                                    <li><a href="#"><FaFacebookF
                                                        className="fa-brands fa-facebook-f" /></a></li>
                                                    <li><a href="#"><FaInstagram
                                                        className="fa-brands fa-instagram" /></a></li>
                                                    <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">{item.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Team