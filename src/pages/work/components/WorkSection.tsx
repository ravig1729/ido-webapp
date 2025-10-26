import { Col, Container, Row } from "react-bootstrap";

// --- Type Definitions ---
type DynamicImages = {
    [K in `image${number}`]?: string;
};

type DynamicSubsections = {
    [K in `subtitle${number}`]?: string;
} & {
    [K in `section${number}`]?: string[];
};

export type SectionContent = {
    title: string;
    image?: string;
    subtitle?: string;
    section?: string[];
} & DynamicSubsections &
    DynamicImages;

// --- Section Renderer ---
const renderSectionList = (section?: string[]) => {
    if (!section?.length) return null;
    return (
        <ul className="icon-list-box pt-2 pb-4">
            {section.map((point, idx) => (
                <li key={idx} className="icon-list-item">
                    <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full inline-block mr-2" />
                    {point}
                </li>
            ))}
        </ul>
    );
};

// --- Main Component ---
const WorkSection = ({ section }: { section: SectionContent }) => {
    // Build dynamic content blocks
    const dynamicBlocks = Object.entries(section)
        .filter(([key, value]) => key.startsWith("section") && Array.isArray(value))
        .map(([key, value]) => {
            const num = key.replace("section", "");
            return {
                subtitle: section[`subtitle${num}` as keyof SectionContent] as string,
                section: value as string[],
                image:
                    (section[`image${num}` as keyof SectionContent] as string) ||
                    section.image,
            };
        });

    // Fallback block if no numbered sections
    const contentBlocks =
        dynamicBlocks.length > 0
            ? dynamicBlocks
            : [
                {
                    subtitle: section.subtitle || "",
                    section: section.section || [],
                    image: section.image,
                },
            ];

    return (
        <Container className="py-10">
            <Row>
                <Col lg={10} className="mx-auto">
                    {section.title && <h1 className="title pb-20">{section.title}</h1>}

                    {contentBlocks.map((block, idx) => (
                        <Row
                            key={idx}
                            className={`align-items-center mb-10 ${idx % 2 !== 0 ? "flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Column */}
                            <Col lg={6} className="mb-4 mb-lg-0 text-center">
                                {block.image && (
                                    <img
                                        src={block.image}
                                        alt={block.subtitle || "Work section"}
                                        className="img-fluid rounded shadow w-100"
                                    />
                                )}
                            </Col>

                            {/* Text Column */}
                            <Col lg={6}>
                                {block.subtitle && <h3 className="para pb-4">{block.subtitle}</h3>}
                                {renderSectionList(block.section)}
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default WorkSection;
