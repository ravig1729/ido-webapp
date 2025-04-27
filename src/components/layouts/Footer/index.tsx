import footerIc3 from '@/assets/img/icons/vl-footer-2.1.svg';
import footerIc1 from '@/assets/img/icons/vl-footer-ic-1.1.svg';
import footerIc2 from '@/assets/img/icons/vl-footer-ic-1.2.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <h1><a href='/'>I-DO</a></h1>
              </div>
              <div className="vl-footer-content">
                <p>Now the time act because every second counts, and contribution brings one step closer a brighter future Join us today &amp; difference.</p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
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
                  <li><Link to="/reports">Reports</Link></li>
                  <li><Link to="/partners">Our Partners</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our services</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li><a href="/donation">Donation Online</a></li>
                  <li><a href="/contact">Donor Centres</a></li>
                  <li><Link to="/pages/team">Volunteering</Link></li>
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
                  <a href="mailto:support@charity.com">support@charity.com</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc2} alt='footerIc2' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">8708 Technology Forest <br /> Pl Suite 125 -G, The Woodlands, TX 773</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc3} alt='footerIc3' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:1234567890">123-456-7890</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col md={6}>
              <p className="vl-copyright-text">© 2025 I-DO ,Inc. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li><a href="#">Privacy Policy </a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer