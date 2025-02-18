import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import Profilemenu from '../layout/Profilemenu'
import coin from "../assets/coin.png"
import coin2 from "../assets/coin2.png"

const Trackorder = () => {
  return (
    <>
    
    <Header />

    <section className='main-wrap'>
        <Container>
            <h2 className='page-title'>Order Details</h2>

            <Row className="mt-5">
                <Col lg={2} md={3}>
                    <Profilemenu />
                </Col>

                <Col lg={6} md={5}>
                    <div className='track-order-bx'>
                        <h3>Order ID: #PWUSA56423</h3>
                        <p>Order Placed: <span>25 Dec, 2024</span></p>

                        <div className='customer-info mt-3'>
                            <h4>Jack Adams</h4>
                            <p>jackadams@dummy.com <br/> 654 789 1234</p>
                        </div>
                        <div className='address-info mt-3'>
                            <h4>Address</h4>
                            <p>ERT 62574, California, United States<br/> of America, AS564178969</p>
                        </div>
                        <div className='track-info mt-3'>
                            <h4>Expected Delivery On 30 Dec,2024</h4>
                            <ul>
                                <li className='done'>
                                    <h5>Order <span>15:30, 25 Dec, 2024</span></h5>
                                </li>
                                <li className='done'>
                                    <h5>Shipped <span>10:12, 27 Dec, 2024</span></h5>
                                </li>
                                <li>
                                    <h5>Delivered <span>Estimated delivery by 30 Dec, 2024</span></h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="summery-bx">
                        <div className="summery-dtls-bx">
                            <div>
                                <h4>Standard Postcards</h4>
                                <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                <h4>1000</h4>
                            </div>
                            <div>
                                <h5 className="price">$88.70</h5>
                                <h4 className='coin mt-4'><img src={coin2} alt='' /> 8</h4>
                            </div>
                        </div>
                        <div className="summery-dtls-bx">
                            <div>
                                <h4>Standard Postcards</h4>
                                <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                <h4>1000</h4>
                            </div>
                            <div>
                                <h5 className="price">$88.70</h5>
                                <h4 className='coin mt-4'><img src={coin2} alt='' /> 33</h4>
                            </div>
                        </div>
                        <div className="summery-dtls-bx">
                            <div>
                                <h4>Standard Postcards</h4>
                                <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                <h4>1000</h4>
                            </div>
                            <div>
                                <h5 className="price">$88.70</h5>
                                <h4 className='coin mt-4'><img src={coin2} alt='' /> 14</h4>
                            </div>
                        </div>
                        
                        <div className='point-heading'>
                            <h3>Collect Point</h3>
                            <h4 className='coin'><img src={coin} alt='' /> 55</h4>
                        </div>

                        <ul className="order-lst mt-2">
                            <li>
                                <h4>SUBTOTAL</h4>
                                <h4>$562.65</h4>
                            </li>
                            <li>
                                <p>Shipping</p>
                                <p><strong>$15.50</strong></p>
                            </li>
                            <li>
                                <p>Sales Tax</p>
                                <p><strong>$12.65</strong></p>
                            </li>
                            <li>
                                <h4>TOTAL</h4>
                                <h4>$590.80</h4>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            </Container>
    </section>

    <Footer />

    </>
  )
}

export default Trackorder