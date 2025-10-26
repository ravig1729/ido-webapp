import footerIc3 from '@/assets/img/icons/vl-footer-2.1.svg';
import footerIc1 from '@/assets/img/icons/vl-footer-ic-1.1.svg';
import footerIc2 from '@/assets/img/icons/vl-footer-ic-1.2.svg';
import siteLogo from '@/assets/img/logo/site-logo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/">
                  <img 
                    src={siteLogo} 
                    alt="I-DO Logo" 
                    style={{ height: "100px", width: "auto", maxWidth: "150px" }}
                  />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p>Working with Indigenous Communities to co-create sustainable solutions that advance health, education, and a brighter future for generations to come.</p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.facebook.com/indigenousdevelopmentorg" target="_blank" rel="noopener noreferrer"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.instagram.com/indigenousdevelopment/" target="_blank" rel="noopener noreferrer"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="https://www.linkedin.com/company/indigenous-development-organisation-i-do/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="fa-brands fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} >
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li><Link to="/">Home Page</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/pages/team">Our Team</Link></li>
                  <li><Link to="/partners">Our Partners</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Support Us</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li><a href="/donation">Donation Online</a></li>
                  <li><a href="/contact">Donor Centres</a></li>
                  <li><Link to="/pages/volunteer-form">Volunteering</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc1} alt='footerIc1' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:indigenousdevelopment20192gmail.com">indigenousdevelopment20192gmail.com</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc2} alt='footerIc2' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">6-194, Gattumalla Village, Laxmidevipally Mandal, <br /> Bhadradri
                    Kothagudem District, Telangana 507101</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc3} alt='footerIc3' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:9848956344">9848956344</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col md={12}>
              <p className="vl-copyright-text">© 2025 I-DO ,Inc. All Rights Reserved.</p>
            </Col>
           
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer