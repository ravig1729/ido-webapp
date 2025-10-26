import useScrollEvent from '@/hooks/useScrollEvent';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import TopMenu from '../TopMenu';
import MobileMenu from './MobileMenu';
import siteLogo from '@/assets/img/logo/site-logo.png';


const TopBar = () => {
    const { scrollY } = useScrollEvent()

    return (
        <>
            <header>
                <div
                    className={`header-area  homepage1 header header-sticky d-none d-lg-block ${scrollY > 100 && 'sticky'}`}
                    id="header">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="header-elements header-elements-1">
                                    <div className="site-logo">
                                        <Link to="/">
                                            <img 
                                                alt="IDO Charity Logo" 
                                                src={siteLogo} 
                                                style={{ height: "80px", width: "auto", maxWidth: "180px" }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="main-menu">
                                        <TopMenu />
                                    </div>
                                    <div className="btn-area">
                                        <Link to="/donation" className="header-btn1">Donate <span><FaArrowRight
                                            className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <MobileMenu />
        </>
    )
}

export default TopBar