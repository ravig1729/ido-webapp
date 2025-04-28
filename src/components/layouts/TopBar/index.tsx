import useScrollEvent from '@/hooks/useScrollEvent';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import TopMenu from '../TopMenu';
import MobileMenu from './MobileMenu';
import siteLogo from '@/assets/img/logo/ido-charity-logo-final.svg';


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
                                        <h1>
                                            <a href="/">
                                                <img alt="logo1" 
                                                src={siteLogo}></img>
                                            </a></h1>
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