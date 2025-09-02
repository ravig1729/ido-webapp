import { Container, Row } from 'react-bootstrap'
import Hero from './components/Hero'
import IconArea from './components/IconArea'

const ContactPage = () => {
  return (
    <>
      <Hero />
      <section className="vl-contact-section-inner sp2">
        <Container>
          <Row className=" flex-lg-row flex-column-reverse">

            <div className="vl-section-content">
              <div className="section-title">
                <h4 className="subtitle">Contact Us</h4>
                <h2 className="title">Reach Together, We Can Make a Difference</h2>
                <p className="para pb-32">We’re here to answer questions, provide information about
                  our <br /> work, and help you find ways to get involved whetherinterested.</p>
              </div>
            </div>
            <IconArea />
          </Row>
          <Row>
            <div className="vl-maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60823.95747632737!2d80.58065511628976!3d17.67395061508081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a340f84ca354239%3A0xb4cdfcbdef4f7eb9!2sGattumalla%2C%20Telangana!5e0!3m2!1sen!2sin!4v1756839506591!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
            </div>
          </Row>
        </Container>

      </section>
    </>
  )
}

export default ContactPage