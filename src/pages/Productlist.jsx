import React from 'react'
import Innerban2 from '../layout/Innerban2'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.jpg'
import card9 from '../assets/card9.jpg'
import card10 from '../assets/card10.jpg'
import card11 from '../assets/card11.jpg'
import card12 from '../assets/card12.jpg'
import { Link } from 'react-router-dom'

const Productlist = () => {
  return (
    <>

        <Header />

        <Innerban2 />

        <section className='main-wrap'>
            <Container>
                <Row>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card1} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Standard Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$17.83</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Classic style for any business</li>
                                        <li>14-17 pt. paper stock options</li>
                                        <li>Print in 1 business day</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card2} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Die-Cut Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$40.37</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Standard and custom shapes</li>
                                        <li>Luxurious foil option</li>
                                        <li>Protective lamination available</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card3} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Business Card Magnets</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$48.72</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>For information that’s always in sight</li>
                                        <li>Sturdy 17 pt. magnetic stock</li>
                                        <li>Customize the size you need</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card4} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Matte Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$18.90</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Smooth, non-reflective surface</li>
                                        <li>Colors come out muted</li>
                                        <li>Perfect for elegant designs</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card5} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Foil Business Cards</h3>
                                    <p>500 starting at</p>
                                    <h5 className='price'>$147.02</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Luxurious design that gets noticed</li>
                                        <li>6 foil colors to match your brand</li>
                                        <li>Spot UV to distinguish your artwork</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card6} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Plastic Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$75.04</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Thick, durable, waterproof plastic</li>
                                        <li>White, frosted, or clear material</li>
                                        <li>Rectangle, square, or oval</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card7} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Painted Edge Business Cards</h3>
                                    <p>250 starting at</p>
                                    <h5 className='price'>$99.97</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Colorful edges for a standout design</li>
                                        <li>Printed on thick 32 pt. cardstock</li>
                                        <li>Solid and metallic colors</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card8} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Spot UV Business Cards</h3>
                                    <p>500 starting at</p>
                                    <h5 className='price'>$62.82</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Elevate your logo with spot UV</li>
                                        <li>Durable 16 pt. cardstock</li>
                                        <li>Print on the front or back-to-back</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card9} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Raised Spot UV Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$75.53</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Superior style, feel, and texture</li>
                                        <li>Luxurious velvet lamination</li>
                                        <li>Premium 16 pt. cardstock gloss</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card10} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Silk Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$43.29</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>High-end look and feel</li>
                                        <li>Water and silk-laminated cardstock</li>
                                        <li>Add spot UV on logo or name</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card11} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Velvet Business Cards</h3>
                                    <p>100 starting at</p>
                                    <h5 className='price'>$68.64</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Soft velvet for a premium look</li>
                                        <li>Printed on 16 pt. cardstock</li>
                                        <li>Comes with spot UV</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='product-bx'>
                            <Link to="#">
                                <div className='pro-img'>
                                    <img src={card12} alt='' />
                                    <div className='btn-overlay'>
                                        <Link to="#" className="btn btn-success">SHOP NOW</Link>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <h3>Raised Foil Business Cards</h3>
                                    <p>2500 starting at</p>
                                    <h5 className='price'>$113.91</h5>
                                    <hr className='my-3' />
                                    <ul>
                                        <li>Foil finish shimmers when light hits it</li>
                                        <li>Gold, silver, & holographic colors</li>
                                        <li>Offered in U.S. standard 2" x 3.5" size</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />

    </>
  )
}

export default Productlist