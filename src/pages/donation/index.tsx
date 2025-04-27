import { Container, Row } from 'react-bootstrap'
import Hero from './components/Hero'
import IconArea from './components/IconArea'

const Donation = () => {
  return (
    <>
      <Hero />
      <section className="vl-contact-section-inner sp2">
        <Container>
          <Row className=" flex-lg-row flex-column-reverse">

            <div className="vl-section-content">
              <div className="section-title">
                <h4 className="subtitle">Donate</h4>
                <h2 className="title">Your Support Powers Our Mission</h2>
                <p className="para pb-32">Every contribution brings us closer to creating lasting impact. We’re here to answer questions, share how your donations make a difference, and help you find the best way to support our work.</p>
              </div>
            </div>
            <IconArea />
          </Row>
        </Container>

      </section>
    </>
  )
}

export default Donation