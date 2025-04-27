import bank from "@/assets/img/icons/bank.svg";
import upiIcon from "@/assets/img/icons/upi-icon.svg";
import { Col, Container, Row } from 'react-bootstrap';
const IconArea = () => {
    return (
        <section className="vl-icon-box-inner pb-70">
            <Container>
                <Row>
                    <Col lg={6} md={6} className="mb-30" key={0}>
                        <div className='iconbox'>
                            <div className="icon-box-flex">
                                <div className="icon">
                                    <span><img src={bank} alt='icon' /></span>
                                </div>
                                <div className="icon-content">
                                    <p className="para">

                                    </p>
                                    <h3 className="title">Bank Account</h3>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={6} md={6} className="mb-30" key={1}>
                        <div className='iconbox'>
                            <div className="icon-box-flex">
                                <div className="icon">
                                    <span style={{ "background": "none" }}><img src={upiIcon} alt='icon' /></span>
                                </div>
                                <div className="icon-content">
                                    <p className="para">{ }</p>
                                    <h3 className="title">UPI info</h3>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IconArea