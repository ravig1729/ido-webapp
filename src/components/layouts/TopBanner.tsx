import topImg1 from '@/assets/img/icons/vl-top-ic-1.1.svg'
import topImg2 from '@/assets/img/icons/vl-top-ic-1.2.svg'
import { Container } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const TopBanner = () => {
  return (
    <div className="vl-header-top d-none d-lg-block" style={{ background: '#fff', borderBottom: '1px solid #eee', position: 'fixed', top: 0, zIndex: 1020, width: "100%" }}>
      <Container>
        <div className="d-flex align-items-center justify-content-between py-2">
          {/* Left side - About us + Icons */}
          <div className="d-flex align-items-center">
            <span className="me-2">Connect Us:</span>
            <div className="d-flex">
              <a href="#" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaFacebookF />
              </a>
              <a href="#" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaInstagram />
              </a>
              <a href="#" className="d-flex align-items-center justify-content-center mx-1 text-dark">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right side - Email and Phone */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-4">
              <img src={topImg1} alt="topImg1" className="me-2" />
              <a href="mailto:idoservice2@gmail.com" className="text-dark">idoservice2@gmail.com</a>
            </div>
            <div className="d-flex align-items-center">
              <img src={topImg2} alt="topImg2" className="me-2"/>
              <a href="tel:5551234567" className="text-dark">(555) 123-4567</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBanner