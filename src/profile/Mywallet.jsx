import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Row } from 'reactstrap'
import Profilemenu from '../layout/Profilemenu'
import coin from "../assets/coin.png"
import coin2 from "../assets/coin2.png"

const Mywallet = () => {
  return (
    <>
    
        <Header />

        <section className='main-wrap'>
            <Container>
                <h2 className='page-title'>My Wallet</h2>

                <Row className="mt-5">
                    <Col lg={2} md={3}>
                        <Profilemenu />
                    </Col>

                    <Col lg={10} md={9}>
                        <div className='total-point-bx'>
                            <h3>Total Collect Point</h3>
                            <h3><img src={coin} alt='' /> 250 <span>($2.5 Cash)</span></h3>
                        </div>

                        <div className='order-bx'>
                            <div>
                                <h3>Order ID: #PWUSA56423</h3>
                                <h4>Order Date: 25 Dec, 2024</h4>
                            </div>
                            <h3><img src={coin2} alt='' /> 70</h3>
                        </div>
                        <div className='order-bx'>
                            <div>
                                <h3>Order ID: #PWUSA98745</h3>
                                <h4>Order Date: 12 Oct, 2024</h4>
                            </div>
                            <h3><img src={coin2} alt='' /> 60</h3>
                        </div>
                        <div className='order-bx'>
                            <div>
                                <h3>Order ID: #PWUSA32564</h3>
                                <h4>Order Date: 08 Aug, 2024</h4>
                            </div>
                            <h3><img src={coin2} alt='' /> 65</h3>
                        </div>
                        <div className='order-bx'>
                            <div>
                                <h3>Order ID: #PWUSA26543</h3>
                                <h4>Order Date: 25 Dec, 2024</h4>
                            </div>
                            <h3><img src={coin2} alt='' /> 55</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />

    </>
  )
}

export default Mywallet