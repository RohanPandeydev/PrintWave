import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, } from 'reactstrap'
import card from "../../assets/card.png"
import { BsCoin } from 'react-icons/bs'

const PaymentGateways = ({ formik }) => {
    return (
        <>
            <h3 className='title1 mt-3'>Payment Method</h3>

            <div className='card-dtls-bx mt-3'>
                <div className='card-hdr'>
                    <FormGroup >
                        <Input name="radio1" checked={formik.values?.method == "credit_card"} onClick={() => formik.setFieldValue("method", "credit_card")} type="radio" />
                        {' '}
                        <Label check>Credit/Debit card</Label>
                    </FormGroup>
                    <img src={card} alt='' />
                </div>

                {/* <Row className='mt-3'>
                    <Col md={12}>
                        <FormGroup>
                            <Label>Card Number</Label>
                            <Input placeholder="Enter your full address" type="text" />
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <Label>Expiration Date</Label>
                            <Row>
                                <Col md={6}>
                                    <Input type="select">
                                        <option>Month</option>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Input type="select">
                                        <option>Year</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Security Code</Label>
                            <Input placeholder="Security Code" type="text" />
                        </FormGroup>
                    </Col>
                </Row> */}
            </div>

            <div className='card-dtls-bx mt-3'>
                <div className='card-hdr'>
                    <FormGroup >
                        <Input name="radio1" checked={formik.values?.method == "paypal"} onClick={() => formik.setFieldValue("method", "paypal")} type="radio" />
                        {' '}
                        <Label check>Paypal</Label>
                    </FormGroup>
                    <img src={card} alt='' />
                </div>
            </div>

            {/* <div className='card-dtls-bx mt-3'>
                <div className='card-hdr'>
                    <FormGroup >
                        <Input name="radio1" checked={formik.values?.method == "wallet"} onClick={() => formik.setFieldValue("method", "wallet")} type="radio" />
                        {' '}
                        <Label check>Pay from Wallet</Label>
                    </FormGroup>
                    <div className='Wallet-available'>
                        <span>Available Coins</span>
                        <p><BsCoin />85</p>
                    </div>
                    
                 
                </div>
            </div> */}

        </>
    )
}

export default PaymentGateways