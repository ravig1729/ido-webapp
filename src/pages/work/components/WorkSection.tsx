import { Col, Container, Row } from 'react-bootstrap';

type SectionContent = {
    image: string;
    title: string;
    subtitle?: string;
    section?: string[];
    subtitle1?: string;
    section1?: string[];
    subtitle2?: string;
    section2?: string[];
    [key: string]: any; // to support dynamic section keys
};

const renderSection = (subtitle: string, section: string[]) => (
    <>
        {subtitle && <h3 className="para pb-8">{subtitle}</h3>} {/* Reduced padding between subtitle and section */}
        <ul className="icon-list-box pt-10 pb-16"> {/* Consistent padding around sections */}
            {section.map((point, idx) => (
                <li key={idx} className="icon-list-item">
                    <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full inline-block mr-2" />
                    {point}
                </li>
            ))}
        </ul>
    </>
);

const WorkSection = ({ section }: { section: SectionContent }) => {
    const dynamicBlocks = Object.keys(section)
        .filter(key => key.startsWith('section') && Array.isArray(section[key]))
        .map(key => {
            const num = key.replace('section', '');
            const subtitleKey = `subtitle${num}`;
            return {
                subtitle: section[subtitleKey] || '',
                section: section[key],
            };
        });

    // If dynamic blocks exist (like section1, section2...), use them
    // Otherwise, fall back to default section/subtitle
    const contentBlocks =
        dynamicBlocks.length > 0
            ? dynamicBlocks
            : [{ subtitle: section.subtitle || '', section: section.section || [] }];

    return (
        <Container>
            <Row>
                <Col lg={10} className="mx-auto">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img className="w-80" src={section.image} alt={section.title} />
                        </Col>
                        <Col lg={6}>
                            {section.title && <h1 className="title pb-20">{section.title}</h1>}
                            {contentBlocks.map((block, idx) => (
                                <div key={idx}>{renderSection(block.subtitle, block.section)}</div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkSection;
