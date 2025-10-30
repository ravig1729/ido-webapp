import bank from "@/assets/img/icons/bank.svg";
import upiIcon from "@/assets/img/icons/upi-icon.svg";
import { Col, Container, Row } from "react-bootstrap";

const IconArea = () => {
    return (
        <section className="vl-icon-box-inner py-70 bg-light">
            <Container>
                <Row className="justify-content-center g-4">
                    {/* Bank Account Info */}
                    <Col lg={6} md={6}>
                        <div
                            className="iconbox d-flex align-items-start p-4 rounded-3 shadow-sm h-100"
                            style={{
                                backgroundColor: "#fff",
                                border: "1px solid #e5e5e5",
                                minHeight: "100%",
                            }}
                        >
                            <div
                                className="icon flex-shrink-0 d-flex align-items-center justify-content-center"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f2f4f7",
                                    marginRight: "20px",
                                }}
                            >
                                <img
                                    src={bank}
                                    alt="Bank Icon"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </div>
                            <div className="icon-content" style={{ flex: 1 }}>
                                <h3
                                    className="title mb-3"
                                    style={{ fontWeight: "600", fontSize: "20px" }}
                                >
                                    Bank Account Details
                                </h3>
                                <div style={{ lineHeight: "1.7", fontSize: "15px" }}>
                                    <p className="mb-1">
                                        <strong>Account Name:</strong> Indigenous Development Organization
                                    </p>
                                    <p className="mb-1">
                                        <strong>Bank:</strong> Canara Bank
                                    </p>
                                    <p className="mb-1">
                                        <strong>Account No:</strong> 1090201005973
                                    </p>
                                    <p className="mb-1">
                                        <strong>Branch:</strong> Hayat Nagar Branch
                                    </p>
                                    <p className="mb-0">
                                        <strong>IFSC Code:</strong> CNRB0013315
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* UPI Info */}
                    <Col lg={6} md={6}>
                        <a
                            href="upi://pay?pa=indigenousdevelopment2019-2@okicici&pn=Indigenous%20Development%20Organization&cu=INR"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div
                                className="iconbox d-flex align-items-start p-4 rounded-3 shadow-sm h-100"
                                style={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #e5e5e5",
                                    minHeight: "100%",
                                    cursor: "pointer",
                                }}
                            >
                                <div
                                    className="icon flex-shrink-0 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        backgroundColor: "#f2f4f7",
                                        marginRight: "20px",
                                    }}
                                >
                                    <img
                                        src={upiIcon}
                                        alt="UPI Icon"
                                        style={{ width: "30px", height: "30px" }}
                                    />
                                </div>
                                <div className="icon-content" style={{ flex: 1 }}>
                                    <h3
                                        className="title mb-3"
                                        style={{ fontWeight: "600", fontSize: "20px" }}
                                    >
                                        UPI Information
                                    </h3>
                                    <div style={{ lineHeight: "1.7", fontSize: "15px" }}>
                                        <p className="mb-1">
                                            <strong>UPI ID:</strong> indigenousdevelopment2019-2@okicici
                                        </p>
                                        <p className="mb-1">
                                            <strong>UPI Number:</strong> 80968 51841
                                        </p>
                                        <p
                                            className="mt-3 text-primary fw-semibold"
                                            style={{
                                                fontSize: "14px",
                                                color: "#0d6efd",
                                                textDecoration: "underline",
                                            }}
                                        >
                                            👉 Click here to pay via UPI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default IconArea;