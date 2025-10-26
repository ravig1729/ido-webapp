import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './ReportsTabs.css';

// --- Import PDFs ---
import Report1 from "../../../assets/pdfs/2023-2024.pdf";
import Report2 from "../../../assets/pdfs/2022-23.pdf";
import Report3 from "../../../assets/pdfs/2021-22.pdf";
import Report4 from "../../../assets/pdfs/2020-21.pdf";
import Report5 from "../../../assets/pdfs/2019-20.pdf";

import Newsletter1 from "../../../assets/pdfs/Q1 News Letter.pdf";
import Newsletter2 from "../../../assets/pdfs/Q2 News Letter.pdf";

// --- Data ---
const annualReports = [
  { title: "Annual Report 2023 - 2024", file: Report1 },
  { title: "Annual Report 2022 - 2023", file: Report2 },
  { title: "Annual Report 2021 - 2022", file: Report3 },
  { title: "Annual Report 2020 - 2021", file: Report4 },
  { title: "Annual Report 2019 - 2020", file: Report5 },
];

const newsletters = [
  { title: "Newsletter APR - JUN 2025", file: Newsletter2 },
  { title: "Newsletter JAN - MAR 2025", file: Newsletter1 },
];

// --- Reusable PDF Card ---
const PdfCard = ({ title, file }: { title: string; file: string }) => (
  <Col lg={4} md={6} sm={12} className="mb-4">
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      <div className="pdf-card text-center p-4 shadow-sm rounded h-100" style={{ border: "1px solid #e0e0e0", transition: "all 0.3s ease", background: "white" }}>
        <div className="pdf-thumb d-flex align-items-center justify-content-center mb-3" style={{ height: "150px", background: "#f4f6f8", borderRadius: "8px" }}>
          <span role="img" aria-label="pdf" style={{ fontSize: "55px", color: "#d32f2f" }}>📄</span>
        </div>
        <h5 className="fw-semibold">{title}</h5>
      </div>
    </a>
  </Col>
);

// --- Main Component ---
const ReportsTabs = () => {
  return (
    <section className="vl-pdf-section sp2 py-5">
      <Container>
        <Tab.Container defaultActiveKey="reports">
          <Nav variant="tabs" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="reports" className="fw-semibold">Annual Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="newsletters" className="fw-semibold">Newsletters</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="reports">
              <Row>
                {annualReports.map((item, idx) => (
                  <PdfCard key={idx} title={item.title} file={item.file} />
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="newsletters">
              <Row>
                {newsletters.map((item, idx) => (
                  <PdfCard key={idx} title={item.title} file={item.file} />
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ReportsTabs;
