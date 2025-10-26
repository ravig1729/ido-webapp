import topImg1 from '@/assets/img/icons/vl-top-ic-1.1.svg'
import topImg2 from '@/assets/img/icons/vl-top-ic-1.2.svg'
import { Container } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const TopBanner = () => {
  return (
    <div className="vl-header-top d-none d-lg-block" style={{ background: '#fff', borderBottom: '1px solid #eee', position: 'fixed', top: 0, zIndex: 1020, width: "100%" }}>
      <Container>
        <div className="d-flex align-items-center justify-content-between py-2">
          {/* Left side - About us + Icons */}
          <div className="d-flex align-items-center">
            <span className="me-2">Connect Us:</span>
            <div className="d-flex">
              <a href="https://www.facebook.com/indigenousdevelopmentorg" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/indigenousdevelopment/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/indigenous-development-organisation-i-do/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right side - Email and Phone */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-4">
              <img src={topImg1} alt="topImg1" className="me-2" />
              <a href="mailto:indigenousdevelopment20192gmail.com" className="text-dark">indigenousdevelopment20192gmail.com</a>
            </div>
            <div className="d-flex align-items-center">
              <img src={topImg2} alt="topImg2" className="me-2"/>
              <a href="tel:9848956344" className="text-dark">9848956344</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBanner