import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Profilemenu from '../layout/Profilemenu'
import { Col, Form, Container, FormGroup, Input, Label, Row, Button, Table } from 'reactstrap'
import { BiSolidEdit } from 'react-icons/bi'
import { RiDeleteBin3Line } from 'react-icons/ri'


const Employeecreate = () => {
  return (
    <>
    
    <Header /> 

    <section className='main-wrap'>
        <Container>
            <h2 className='page-title'>Employee Create</h2>
            
            <Row className="mt-5">
                <Col lg={2} md={3}>
                    <Profilemenu />
                </Col>

                <Col lg={10} md={9}>

                    <div className='personal-info'>
                        <div className="hdr-prt">
                            <h3>Personal Information</h3>
                        </div>

                        <Form className="shipping-form mt-4">
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Full Name</Label>
                                        <Input placeholder="Enter full name" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Designation</Label>
                                        <Input placeholder="Enter Designation" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Email Address</Label>
                                        <Input placeholder="Enter email address" type="email" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Phone Number</Label>
                                        <Input placeholder="Enter phone number" type="tel" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <Button className="btn btn-success">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                    <Table bordered responsive className='customer-lst-table mt-4'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone No.</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Avijeet Sarkar</td>
                                <td>demo123@yopmail.com</td>
                                <td>8250065898</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                            <tr>
                                <td>Soumik Gupta</td>
                                <td>soumik1234@gmail.com</td>
                                <td>9257869548</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                            <tr>
                                <td>Suman Roy</td>
                                <td>roysuman987@yopmail.com</td>
                                <td>9735645489</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                            <tr>
                                <td>Avijeet Sarkar</td>
                                <td>demo123@yopmail.com</td>
                                <td>8250065898</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                            <tr>
                                <td>Soumik Gupta</td>
                                <td>soumik1234@gmail.com</td>
                                <td>9257869548</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                            <tr>
                                <td>Suman Roy</td>
                                <td>roysuman987@yopmail.com</td>
                                <td>9735645489</td>
                                <td className='d-flex align-items-center justify-content-center'>
                                    <BiSolidEdit className='edit' />
                                    <RiDeleteBin3Line className='delete' />
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </Col>
            </Row>
        </Container>
    </section>

    <Footer /> 

    </>
  )
}

export default Employeecreate