import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrowDown from '@/assets/img/icons/vl-arrow-down.svg';
import { categories, categoryContent } from '../data';

const SideBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('Case Studies');
    const [isMuted] = useState(true); // Video starts muted
    const videoRef = useRef<HTMLVideoElement>(null);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    const currentContent = categoryContent[selectedCategory];

    if (!currentContent) return null;

    return (
        <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    {/* Category Sidebar */}
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

                    {/* Content Area */}
                    <Col lg={8}>
                        <div className="vl-event-content-area ml-50">

                            {/* Title for single type */}
                            {currentContent.type === 'single' && currentContent.title && (
                                <h2 className="title mb-3">{currentContent.title}</h2>
                            )}

                            {/* Image for single type */}
                            {currentContent.type === 'single' && currentContent.image && (
                                <div className="vl-large-thumb mb-4">
                                    <img className="w-100" src={currentContent.image} alt={selectedCategory} />
                                </div>
                            )}

                            {/* Sections */}
                            {selectedCategory !== 'Media' && currentContent.sections?.map((section, idx) => (
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

                                    {section.paragraphs?.map((p, pIdx) => (
                                        <p className="para pb-3" key={pIdx}>{p}</p>
                                    ))}
                                </div>
                            ))}

                            {/* Video with title, controls, and summary */}
                            {currentContent.type === 'single' && currentContent.video && (
                                <div className="vl-large-thumb mb-4">
                                    {currentContent.videoTitle && (
                                        <h2 className="title mb-3">{currentContent.videoTitle}</h2>
                                    )}
                                    <video
                                        ref={videoRef}
                                        className="w-100 mb-3"
                                        src={currentContent.video}
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        controls
                                    />
                                    {currentContent.videoSummary && currentContent.videoSummary.map((p, idx) => (
                                        <p className="para pb-3" key={idx}>{p}</p>
                                    ))}
                                </div>
                            )}

                            {currentContent.video && currentContent.youtube && (
                                <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
                            )}

                            {/* YouTube Video Section */}
                            {currentContent.youtube && (
                                <div className="vl-large-thumb mb-4">
                                    {currentContent.youtubeTitle && (
                                        <h2 className="title mb-3">{currentContent.youtubeTitle}</h2>
                                    )}
                                    <div className="youtube-wrapper mb-3" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            src={currentContent.youtube}
                                            title={currentContent.youtubeTitle}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    {currentContent.youtubeSummary && (
                                        <p className="para">{currentContent.youtubeSummary}</p>
                                    )}
                                </div>
                            )}

                            {/* Media Section */}
                            {selectedCategory === 'Media' && currentContent.sections && currentContent.sections.length > 0 && (
                                <div className="media-section">
                                    {/* Large selected image */}
                                    {selectedMedia && (
                                        <div className="vl-large-thumb mb-4">
                                            <img
                                                src={selectedMedia}
                                                alt="Selected Media"
                                                className="w-100"
                                                style={{ borderRadius: '8px', maxHeight: '500px', objectFit: 'contain', cursor: 'pointer' }}
                                                onClick={() => setSelectedMedia(null)} // Click again to hide
                                            />
                                        </div>
                                    )}

                                    {/* Grid of thumbnails styled like sections */}
                                    <div className="media-grid" style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '30px' // larger gap to match sidebar sections
                                    }}>
                                        {currentContent.sections
                                            .filter(section => section.image !== selectedMedia)
                                            .map((section, idx) => (
                                                section.image && (
                                                    <div key={idx} className="vl-large-thumb" style={{ cursor: 'pointer' }}>
                                                        <img
                                                            src={section.image}
                                                            alt={`Media ${idx + 1}`}
                                                            className="w-100"
                                                            style={{ borderRadius: '8px', height: '150px', objectFit: 'cover' }}
                                                            onClick={() => setSelectedMedia(section.image!)}
                                                        />
                                                    </div>
                                                )
                                            ))}
                                    </div>
                                </div>
                            )}


                            {/* Fallback for empty sections */}
                            {!currentContent?.sections?.length && !currentContent.video && (
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