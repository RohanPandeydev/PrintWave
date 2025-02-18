import React, { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'reactstrap'
import Profilemenu from '../layout/Profilemenu'
import { Link } from 'react-router-dom'
import { CgTrack } from 'react-icons/cg'
import cart1 from "../assets/cart1.jpg"
import cart2 from "../assets/cart2.jpg"
import cart3 from "../assets/cart3.jpg"
import coin from "../assets/coin.png"
import coin2 from "../assets/coin2.png"

const Myorder = () => {

const [open, setOpen] = useState('1');
const toggle = (id) => {
    if (open === id) {
    setOpen();
    } else {
    setOpen(id);
    }
};

  return (
    <>
    
        <Header /> 

        <section className='main-wrap'>
            <Container>
                <h2 className='page-title'>My Orders</h2>
                
                <Row className="mt-5">
                    <Col lg={2} md={3}>
                        <Profilemenu />
                    </Col>

                    <Col lg={10} md={9}>

                        <Accordion open={open} toggle={toggle} className='order-accordion'>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <h3>Order ID: <span>#PWUSA56423</span></h3>
                                    <h3>Emp Name: <span>Avijeet Sarkar</span></h3>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <h4 className='me-3'>Order Placed: <span>25 Dec, 2024</span></h4>
                                        <Link to="/Trackorder" className="btn btn-success"><CgTrack /> TRACK ORDER</Link>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    
                                    <div className='p-4'>
                                        <div className='order-summery-bx'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart1} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Standard Postcards</h4>
                                                    <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$88.70</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 8</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart2} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Postcards </h4>
                                                    <p>10" X 7" (Folds To 5" X 7") | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$333.60</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 33</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart3} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Greeting Cards </h4>
                                                    <p>7" X 5" (Folds To 3.5" X 5") | 16 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>250 PS</span>
                                                        <span className='price'>$140.35</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 14</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='order-footer'>
                                        <div className='collect-point-bx'>
                                            <h4>Collect Point</h4>
                                            <h4><img src={coin} alt='' /> 55</h4>
                                        </div>
                                        <div className='total-price-bx'>
                                            <p>Pain using credit card ending with 7369</p>
                                            <h4>$590.80</h4>
                                        </div>
                                    </div>

                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                    <h3>Order ID: <span>#HFFHSA564575</span></h3>
                                    <h3>Emp Name: <span>Soumik Dey</span></h3>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <h4 className='me-3'>Order Placed: <span>21 Nov, 2024</span></h4>
                                        <Link to="/Trackorder" className="btn btn-success"><CgTrack /> TRACK ORDER</Link>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <div className='p-4'>
                                        <div className='order-summery-bx'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart1} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Standard Postcards</h4>
                                                    <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$88.70</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 8</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart2} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Postcards </h4>
                                                    <p>10" X 7" (Folds To 5" X 7") | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$333.60</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 33</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart3} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Greeting Cards </h4>
                                                    <p>7" X 5" (Folds To 3.5" X 5") | 16 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>250 PS</span>
                                                        <span className='price'>$140.35</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 14</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div> 

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart1} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Standard Postcards</h4>
                                                    <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$88.70</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 8</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart2} alt='' />
                                                </div>
                                                <div>
                                                    <h4>Folded Postcards </h4>
                                                    <p>10" X 7" (Folds To 5" X 7") | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$333.60</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 33</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='order-footer'>
                                        <div className='collect-point-bx'>
                                            <h4>Collect Point</h4>
                                            <h4><img src={coin} alt='' /> 55</h4>
                                        </div>
                                        <div className='total-price-bx'>
                                            <p>Pain using credit card ending with 7369</p>
                                            <h4>$590.80</h4>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionHeader targetId="3">
                                    <h3>Order ID: <span>#KLED5872575</span></h3>
                                    <h3>Emp Name: <span>Ariyan Sing</span></h3>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <h4 className='me-3'>Order Placed: <span>14 Aug, 2024</span></h4>
                                        <Link to="/Trackorder" className="btn btn-success"><CgTrack /> TRACK ORDER</Link>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <div className='p-4'>
                                        <div className='order-summery-bx'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart1} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Standard Postcards</h4>
                                                    <p>4" X 6" | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$88.70</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 8</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart2} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Postcards </h4>
                                                    <p>10" X 7" (Folds To 5" X 7") | 14 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>1000 PS</span>
                                                        <span className='price'>$333.60</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 33</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>

                                        <div className='order-summery-bx mt-4'>
                                            <div className='cart-pro-dtls'>
                                                <div className='cart-pro-img'>
                                                    <img src={cart3} alt='' />
                                                </div>
                                                <div className='cart-pro-info'>
                                                    <h4>Folded Greeting Cards </h4>
                                                    <p>7" X 5" (Folds To 3.5" X 5") | 16 Pt. Cardstock Gloss</p>
                                                    <p>
                                                        <span className='quantity'>250 PS</span>
                                                        <span className='price'>$140.35</span>
                                                        <span className='coin'><img src={coin2} alt='' /> 14</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Status</label>
                                                <p>In - Transit</p>
                                            </div>
                                            <div className='status-bx'>
                                                <label>Delivery Expected By</label>
                                                <p>30 Dec, 2024</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='order-footer'>
                                        <div className='collect-point-bx'>
                                            <h4>Collect Point</h4>
                                            <h4><img src={coin} alt='' /> 55</h4>
                                        </div>
                                        <div className='total-price-bx'>
                                            <p>Pain using credit card ending with 7369</p>
                                            <h4>$590.80</h4>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />  

    </>
  )
}

export default Myorder