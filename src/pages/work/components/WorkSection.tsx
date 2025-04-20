import { Col, Container, Row } from 'react-bootstrap';

const WorkSection = ({ section }: { section: { image: string, title: string, subtitle: string, points: string[] } }) => {
    return (
        <Container>
            <Row>
                <Col lg={10} className="mx-auto">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img className="w-80" src={section.image} alt={section.title} />
                        </Col>
                        <Col lg={6}>
                            <h1 className="title pb-20">{section.title}</h1>
                            <h3 className="para pb-16">{section.subtitle}</h3>
                            <ul className="icon-list-box pt-20">
                                {section.points.map((point, idx) => (
                                    <li key={idx}>
                                        <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full inline-block mr-2" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkSection;
