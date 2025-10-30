import bank from "@/assets/img/icons/bank.svg";
import upiIcon from "@/assets/img/icons/upi-icon.svg";
import { Col, Container, Row } from "react-bootstrap";

const IconArea = () => {
    return (
        <section className="vl-icon-box-inner pb-70">
            <Container>
                <Row>
                    {/* Bank Account Info */}
                    <Col lg={6} md={6} className="mb-30" key={0}>
                        <div className="iconbox">
                            <div className="icon-box-flex">
                                <div className="icon">
                                    <span>
                                        <img src={bank} alt="Bank Icon" />
                                    </span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="title">Bank Account</h3>
                                    <p className="para">
                                        <strong>Account Name:</strong> Indigenous Development Organization
                                        <br />
                                        <strong>Bank:</strong> Canara Bank
                                        <br />
                                        <strong>Account No:</strong> 1090201005973
                                        <br />
                                        <strong>Branch:</strong> Hayat Nagar Branch
                                        <br />
                                        <strong>IFSC Code:</strong> CNRB0013315
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* UPI Info */}
                    <Col lg={6} md={6} className="mb-30" key={1}>
                        <div className="iconbox">
                            <div className="icon-box-flex">
                                <div className="icon">
                                    <span style={{ background: "none" }}>
                                        <img src={upiIcon} alt="UPI Icon" />
                                    </span>
                                </div>
                                <div className="icon-content">
                                    <h3 className="title">UPI Info</h3>
                                    <p className="para">
                                        <strong>UPI ID:</strong> indigenousdevelopment2019-2@okicici
                                        <br />
                                        <strong>UPI Number:</strong> 80968 51841
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default IconArea;