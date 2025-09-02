import { Container, Row, Col } from "react-bootstrap";

import Report1 from "../../../assets/pdfs/2023-2024.pdf";
import Report2 from "../../../assets/pdfs/2022-23.pdf";
import Report3 from "../../../assets/pdfs/2021-22.pdf";
import Report4 from "../../../assets/pdfs/2020-21.pdf";
import Report5 from "../../../assets/pdfs/2019-20.pdf";

const pdfData = [
    { title: "ANNUAL REPORT 2023 - 2024", file: Report1 },
    { title: "ANNUAL REPORT 2022 - 2023", file: Report2 },
    { title: "ANNUAL REPORT 2021 - 2022", file: Report3 },
    { title: "ANNUAL REPORT 2020 - 2021", file: Report4 },
    { title: "ANNUAL REPORT 2019 - 2020", file: Report5 },
];

const Reports = () => {
    return (
        <section className="vl-pdf-section sp2">
            <Container>
                <Row>
                    {pdfData.map((item, idx) => (
                        <Col lg={4} md={6} sm={12} key={idx} className="mb-4">
                            <div
                                className="pdf-card text-center p-3 shadow-sm rounded"
                                style={{
                                    border: "1px solid #ddd",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                }}
                                onClick={() => window.open(item.file, "_blank")}
                            >
                                <div
                                    className="pdf-thumb d-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        height: "150px",
                                        background: "#f9f9f9",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <span role="img" aria-label="pdf" style={{ fontSize: "50px" }}>
                                        📄
                                    </span>
                                </div>
                                <h5 className="mb-0">{item.title}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Reports;
