import { useEffect } from 'react'
import { Link } from "react-router-dom";
import {
    FaBars,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaLocationDot,
    FaPhoneVolume,
    FaXmark,
} from 'react-icons/fa6'
import siteLogo from '@/assets/img/logo/site-logo.png'
import useToggle from '@/hooks/useToggle'
import MobileMenuItem from '../MobileMenuItem'
import { Col, Container } from 'react-bootstrap'

const MobileMenu = () => {
    const { isOpen, toggle } = useToggle()

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (isOpen && !event.target.closest('.mobile-sidebar')) {
                toggle()
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <>
            <div className="mobile-header mobile-haeder1 d-block d-lg-none">
                <Container>
                    <Col xs={12}>
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link to="/">
                                    <img
                                        src={siteLogo}
                                        alt='IDO Charity Logo'
                                        style={{ height: "50px", width: "auto", maxWidth: "120px" }}
                                    />
                                </Link>
                            </div>
                            <div onClick={toggle} className="mobile-nav-icon dots-menu">
                                <FaBars className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
            <div className={`mobile-sidebar mobile-sidebar1 ${isOpen ? 'mobile-menu-active' : ''}`}>
                <div className="logosicon-area">
                    <div className="logos">
                        <img src={siteLogo} alt='siteLogo' style={{height: "60px", width: "80px"}} />
                    </div>
                    <div className="menu-close" onClick={toggle}>
                        <FaXmark className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <MobileMenuItem onLinkClick={toggle} />
                    <div className="allmobilesection">
                        <Link to="/contact" className="header-mobile-btn1">Get
                            Started</Link>
                        <div className="vl-mobile-contact1">
                            <h3 className="title">Contact Info</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaPhoneVolume size={16} className="fa-solid fa-phone-volume" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="tel:+918096851841">+91 8096851841</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaEnvelope size={16} className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">indigenousdevelopment2019@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaLocationDot size={16} width={16} height={16}
                                            className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">6-194, Gattumalla Village, Laxmidevipally Mandal, Bhadradri Kothagudem District, Telangana 507101, <br /> 4-6-131, Kammari Basthi, Hayathnagar, Rangareddy District, Telangana 501505</a>
                                    </div>
                                </div>
                                <div className="vl-mobile-contact1">
                                    <h3 className="title">Social Links</h3>
                                    <div className="social-links-mobile-menu">
                                        <ul>
                                            <li><a href="https://www.facebook.com/indigenousdevelopmentorg"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='d-flex align-items-center justify-content-center'><FaFacebookF
                                                    className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="https://www.instagram.com/indigenousdevelopment/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='d-flex align-items-center justify-content-center'><FaInstagram
                                                    className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="https://www.linkedin.com/company/indigenous-development-organisation-i-do/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='d-flex align-items-center justify-content-center'><FaLinkedinIn
                                                    className="fa-brands fa-linkedin-in" /></a></li>
                                            {/* <li><a href="#"
                                                className='d-flex align-items-center justify-content-center'><FaYoutube
                                                    className="fa-brands fa-youtube" /></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
