import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { categories, categoryContent } from '../data';
import type { ContentItem } from '../data';

const SideBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('Blog');
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [isMuted] = useState(true); // Video starts muted
    const videoRef = useRef<HTMLVideoElement>(null);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    const currentCategoryData = categoryContent[selectedCategory];
    const currentItem = selectedItemId 
        ? currentCategoryData?.items.find((item: ContentItem) => item.id === selectedItemId)
        : currentCategoryData?.items[0]; // Default to first item

    if (!currentCategoryData || !currentItem) return null;

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        setSelectedItemId(null); // Reset to first item when category changes
        setSelectedMedia(null); // Reset selected media
    };

    const handleItemSelect = (itemId: string) => {
        setSelectedItemId(itemId);
        setSelectedMedia(null); // Reset selected media when item changes
    };

    return (
        <div className="vl-sidebar-area sp2">
            <Container>
                {/* Category Row - Full Width */}
                <Row className="mb-4">
                    <Col xs={12}>
                        <div className="category-section">
                            <h3 className="title mb-3">Categories</h3>
                            <div className="category-tabs" style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '12px',
                                justifyContent: 'center'
                            }}>
                                {categories.map((cat: string) => (
                                    <button
                                        key={cat}
                                        className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(cat)}
                                        style={{
                                            padding: '12px 24px',
                                            border: selectedCategory === cat ? '2px solid #007bff' : '1px solid #e0e0e0',
                                            borderRadius: '25px',
                                            backgroundColor: selectedCategory === cat ? '#007bff' : 'white',
                                            color: selectedCategory === cat ? 'white' : '#333',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease',
                                            outline: 'none',
                                            whiteSpace: 'nowrap',
                                            boxShadow: selectedCategory === cat ? '0 4px 12px rgba(0,123,255,0.25)' : '0 2px 6px rgba(0,0,0,0.1)',
                                            minWidth: '120px',
                                            textAlign: 'center'
                                        }}
                                        onMouseOver={(e) => {
                                            if (selectedCategory !== cat) {
                                                e.target.style.backgroundColor = '#f8f9fa';
                                                e.target.style.borderColor = '#007bff';
                                            }
                                        }}
                                        onMouseOut={(e) => {
                                            if (selectedCategory !== cat) {
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.borderColor = '#e0e0e0';
                                            }
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* Left Sidebar - Items List */}
                    <Col lg={4} md={5} className="mb-4 mb-lg-0">
                        <div className="vl-widget-area">
                            {/* Items List */}
                            <div className="vl-search-widget">
                                <h3 className="title">{selectedCategory} Articles</h3>
                                <div className="items-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                    {currentCategoryData.items.map((item: ContentItem) => (
                                        <div
                                            key={item.id}
                                            className={`item-card ${selectedItemId === item.id || (!selectedItemId && item === currentCategoryData.items[0]) ? 'active' : ''}`}
                                            onClick={() => handleItemSelect(item.id)}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '20px',
                                                marginBottom: '15px',
                                                border: selectedItemId === item.id || (!selectedItemId && item === currentCategoryData.items[0]) ? '2px solid #007bff' : '1px solid #e0e0e0',
                                                borderRadius: '12px',
                                                transition: 'all 0.3s ease',
                                                backgroundColor: selectedItemId === item.id || (!selectedItemId && item === currentCategoryData.items[0]) ? '#f8f9fa' : 'white',
                                                boxShadow: selectedItemId === item.id || (!selectedItemId && item === currentCategoryData.items[0]) ? '0 4px 12px rgba(0,123,255,0.15)' : '0 2px 4px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            {item.image && (
                                                <div className="item-thumbnail mb-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '120px',
                                                            objectFit: 'cover',
                                                            borderRadius: '8px'
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <h5 className="item-title" style={{
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                lineHeight: '1.4',
                                                color: '#333'
                                            }}>
                                                {item.title}
                                            </h5>
                                            <div className="item-meta" style={{ marginBottom: '10px' }}>
                                                {item.date && (
                                                    <span style={{
                                                        fontSize: '12px',
                                                        color: '#666',
                                                        marginRight: '15px',
                                                        display: 'inline-flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        📅 {item.date}
                                                    </span>
                                                )}
                                                {item.author && (
                                                    <span style={{
                                                        fontSize: '12px',
                                                        color: '#666',
                                                        display: 'inline-flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        👤 {item.author}
                                                    </span>
                                                )}
                                            </div>
                                            {item.summary && (
                                                <p className="item-summary" style={{
                                                    fontSize: '13px',
                                                    color: '#777',
                                                    marginBottom: '0',
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    lineHeight: '1.4'
                                                }}>
                                                    {item.summary}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Content Area */}
                    <Col lg={8} md={7}>
                        <div className="vl-event-content-area" style={{ paddingLeft: '40px' }}>

                            {/* Article Title and Meta */}
                            <div className="article-header mb-4">
                                <h2 className="title mb-3">{currentItem.title}</h2>
                                <div className="article-meta" style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
                                    {currentItem.date && <span className="me-3">📅 {currentItem.date}</span>}
                                    {currentItem.author && <span className="me-3">👤 {currentItem.author}</span>}
                                </div>
                            </div>

                            {/* Main Image */}
                            {currentItem.image && (
                                <div className="vl-large-thumb mb-4">
                                    <img className="w-100" src={currentItem.image} alt={currentItem.title} />
                                </div>
                            )}

                            {/* Content Sections */}
                            {selectedCategory !== 'Media' && currentItem.sections?.map((section: any, idx: number) => (
                                <div key={idx} className="mb-5">
                                    {section.subtitle && (
                                        <h3 className="title">{section.subtitle}</h3>
                                    )}

                                    {section.title && (
                                        <h2 className="title">{section.title}</h2>
                                    )}

                                    {section.image && (
                                        <div className="vl-large-thumb mb-4">
                                            <img className="w-100" src={section.image} alt={section.title} />
                                        </div>
                                    )}

                                    {section.paragraphs?.map((p: string, pIdx: number) => (
                                        <p className="para pb-3" key={pIdx}>{p}</p>
                                    ))}
                                </div>
                            ))}

                            {/* Video with title, controls, and summary */}
                            {currentItem.video && (
                                <div className="vl-large-thumb mb-4">
                                    {currentItem.videoTitle && (
                                        <h2 className="title mb-3">{currentItem.videoTitle}</h2>
                                    )}
                                    <video
                                        ref={videoRef}
                                        className="w-100 mb-3"
                                        src={currentItem.video}
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        controls
                                    />
                                    {currentItem.videoSummary && currentItem.videoSummary.map((p: string, idx: number) => (
                                        <p className="para pb-3" key={idx}>{p}</p>
                                    ))}
                                </div>
                            )}

                            {currentItem.video && currentItem.youtube && (
                                <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
                            )}

                            {/* YouTube Video Section */}
                            {currentItem.youtube && (
                                <div className="vl-large-thumb mb-4">
                                    {currentItem.youtubeTitle && (
                                        <h2 className="title mb-3">{currentItem.youtubeTitle}</h2>
                                    )}
                                    <div className="youtube-wrapper mb-3" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            src={currentItem.youtube}
                                            title={currentItem.youtubeTitle}
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
                                    {currentItem.youtubeSummary && (
                                        <p className="para">{currentItem.youtubeSummary}</p>
                                    )}
                                </div>
                            )}

                            {/* Media Section */}
                            {selectedCategory === 'Media' && currentItem.sections && currentItem.sections.length > 0 && (
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
                                        {currentItem.sections
                                            .filter((section: any) => section.image !== selectedMedia)
                                            .map((section: any, idx: number) => (
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
                            {!currentItem?.sections?.length && !currentItem.video && (
                                <p className="para">Content will be added soon for this item.</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SideBar;