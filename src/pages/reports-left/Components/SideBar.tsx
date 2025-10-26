import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrowDown from '@/assets/img/icons/vl-arrow-down.svg';
import { categories, categoryContent } from '../data';

const SideBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('Case Studies');
    const currentContent = categoryContent[selectedCategory];

    if (!currentContent) return null;

    return (
        <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="vl-widget-area">
                            <div className="vl-search-widget mb-30">
                                <h3 className="title">Categories</h3>
                                {categories.map((cat) => (
                                    <div
                                        className={`vl-single-service ${selectedCategory === cat ? 'active' : ''}`}
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <a>{cat}</a>
                                        <span><img src={arrowDown} alt='arrowDown' /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="vl-event-content-area ml-50">
                            {currentContent.type === 'single' && currentContent.image && (
                                <div className="vl-large-thumb mb-4">
                                    <img className="w-100" src={currentContent.image} alt={selectedCategory} />
                                </div>
                            )}

                            {currentContent.sections?.map((section, idx) => (
                                <div key={idx} className="mb-5">
                                    {currentContent.type === 'single' && section.subtitle && (
                                        <h3 className="title">{section.subtitle}</h3>
                                    )}

                                    {currentContent.type === 'multi' && section.title && (
                                        <h2 className="title">{section.title}</h2>
                                    )}

                                    {section.image && currentContent.type === 'multi' && (
                                        <div className="vl-large-thumb mb-4">
                                            <img className="w-100" src={section.image} alt={section.title} />
                                        </div>
                                    )}

                                    {section.paragraphs.map((p, pIdx) => (
                                        <p className="para pb-3" key={pIdx}>{p}</p>
                                    ))}
                                </div>
                            ))}

                            {!currentContent?.sections?.length && (
                                <p className="para">Content will be added soon for this category.</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SideBar;