import vision2 from '@/assets/img/about/vl-vission2.png'
import aboutOverview from '@/assets/img/about/about-overview.svg'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const Vision = () => {
    return (
        <section className="vl-about-vission-bg sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <img src={aboutOverview} alt='vision2' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-vission-content ml-50 mb-30">
                            <div className="vl-section-title-1">
                                <h5 className="subtitle">Our Mission &amp; Vision</h5>
                                <h2 className="title">Our Purpose: Mission and Vision for a Better </h2>
                                {/* <div>
                                    <img src={aboutOverview} alt='vision2' />
                                </div> */}
                            </div>
                            <div className="vl-vission-tab2">
                                <TabContainer defaultActiveKey={'pills-home'}>
                                    <Nav className=" nav-pills" id="pills-tab" role="tablist">
                                        <NavItem role="presentation">
                                            <NavLink eventKey="pills-home" data-bs-toggle="pill"
                                                data-bs-target="#pills-home" type="button" role="tab"
                                                aria-controls="pills-home" aria-selected="true">Our
                                                Vision</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink eventKey="pills-profile" data-bs-toggle="pill"
                                                data-bs-target="#pills-profile" type="button" role="tab"
                                                aria-controls="pills-profile" aria-selected="false">Our
                                                Mission </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent>
                                        <TabPane className="fade" eventKey="pills-home" role="tabpanel"
                                            aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <p className="para">Vision: To strengthen the primary health care services for the aspirational districts/ blocks of India.</p>
                                        </TabPane>
                                        <TabPane className="fade" eventKey="pills-profile" role="tabpanel"
                                            aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <p className="para">Mission: To provide Primary Health Care services focusing on Mother and Child Health.</p>
                                        </TabPane>
                                    </TabContent>
                                </TabContainer>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Vision