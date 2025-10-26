import shapeImg1 from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png'
import shapeImg2 from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png'
import shapeImg3 from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png'
import blogBg from '@/assets/img/banner/banner9.png'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from "react-router";
import { Col, Row } from 'react-bootstrap'

const Hero = () => {
    return (
        <section className="vl-breadcrumb" style={{ backgroundImage: `url(${blogBg})` }}>
            <div className="shape1"><img src={shapeImg1} alt='shapeImg1' /></div>
            <div className="shape2"><img src={shapeImg2} alt='shapeImg2' /></div>
            <div className="shape2"><img src={shapeImg3} alt='shapeImg3' /></div>
            <div className="container">
                <Row>
                    <Col lg={12}>
                        <div className="vl-breadcrumb-title">
                            <h2 className="heading">Updates</h2>
                            <div className="vl-breadcrumb-list">
                                <span><Link to="/">Home</Link></span>
                                <span className="dvir"><BsThreeDots className="fa-solid fa-angle-right" /></span>
                                <span><a className="active" href="#">Updates</a></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Hero