import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Button, Col, Container, Row } from 'reactstrap'
import Profilemenu from '../layout/Profilemenu'
import client from "../assets/client.png"
import { GrEdit } from 'react-icons/gr'

const Personalinformation = () => {
  return (
    <>

        <Header />

        <section className='main-wrap'>
            <Container>
                <h2 className='page-title'>My Profile</h2>

                <Row className='mt-5'>
                    <Col lg={2} md={3}>
                        <Profilemenu />
                    </Col>

                    <Col lg={10} md={9}>
                        <div className='profile-info'>
                            <div className='user-info'>
                                <div className='user-img'>
                                    <img src={client} alt='' />
                                </div>
                                <h3>Jack Adams <span>Los Angeles, California, USA</span></h3>
                            </div>
                            <Button className='btn-edit'><GrEdit /> EDIT</Button>
                        </div>

                        <div className='personal-info mt-4'>
                            <div className='hdr-prt'>
                                <h3>Personal Information</h3>
                                <Button className='btn-edit'><GrEdit /> EDIT</Button>
                            </div>

                            <div className='dtls-info'>
                                <h4><span>First Name</span> Jack</h4>
                                <h4><span>Last Name</span> Adams</h4>
                                <h4><span>Email address</span> jackadams@dummy.com</h4>
                                <h4><span>Phone number</span> 654 789 1234</h4>
                            </div>
                        </div>

                        <div className='personal-info mt-4'>
                            <div className='hdr-prt'>
                                <h3>Address</h3>
                                <Button className='btn-edit'><GrEdit /> EDIT</Button>
                            </div>

                            <div className='dtls-info'>
                                <h4><span>Country</span> United States of America</h4>
                                <h4><span>City/State</span> California, USA</h4>
                                <h4><span>Postal Code</span> ERT 62574</h4>
                                <h4><span>TAX ID</span> AS564178969</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />

    </>
  )
}

export default Personalinformation