import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Button, Col, Container, FormGroup, Input, Label, Row, Form } from 'reactstrap'
import { ImPhone } from "react-icons/im";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    
        <Header />

        <section className='main-wrap'>
            <Container>
                <h2 className='page-title'>Contact Us</h2>

                <Row className='mt-5'>
                    <Col md={8}>
                        <Form className="contact-form">
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input placeholder="" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Email Address</Label>
                                        <Input placeholder="" type="email" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Phone Number</Label>
                                        <Input placeholder="" type="tel" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Subject</Label>
                                        <Input type="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleText">Message</Label>
                                        <Input type="textarea" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button className="btn btn-success">SUBMIT</Button>
                        </Form>
                    </Col>

                    <Col md={4}>
                        <h3 className='contact-title'>Get In Touch</h3>

                        <ul className="f-contact">        
                            <li><div className='c-ico'><FaMapMarkerAlt /></div> <p><span>Corporate Headquarters</span> 6486 Wilkinson Harbor Apt. 719, Florida, South Mallie, 57189</p></li>            
                            <li><div className='c-ico'><ImPhone /></div> <p><span>Phone Support</span> <a href="tel:6547891234">654 789 1234</a></p></li>  
                            <li><div className='c-ico'><FaEnvelope /></div> <p><span>Mail Support</span> <a href="mailto:support@info.com">support@info.com</a></p></li>   
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />

    </>
  )
}

export default Contact