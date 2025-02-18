import React, { useEffect } from 'react'
import Header from '../layout/Header'
import { Col, Container, Row } from 'reactstrap'
import rtimg1 from "../assets/rt-img1.jpg"
import rtimg2 from "../assets/rt-img2.jpg"
import rtimg3 from "../assets/rt-img3.jpg"
import pic1 from "../assets/pic1.jpg"
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Banner from '../components/Banner'
import Trendingproduct from '../components/Trendingproduct'
import { fetchUserCart } from '../helper/carthelper/AddtoCart'
import CartServices from '../services/CartServices'

const Home = () => {



  // useEffect(async () => {
  //   const databaseCart = await CartServices.userCartList();
  //   console.log(databaseCart,"databaseCart ZHome")

  // }, [])
  return (
    <>
      <Header />

      <section className="mt-3">
        <Container>
          <Row>
            <Col lg={9}>

              <Banner />

            </Col>

            <Col lg={3}>
              <div className="rt-cate-bx">
                <img src={rtimg1} alt="" />
                <div className="cate-txt">
                  <h4>Print customized TShirts</h4>
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="rt-cate-bx">
                <img src={rtimg2} alt="" />
                <div className="cate-txt">
                  <h4>Get customized Office Stationery</h4>
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="rt-cate-bx">
                <img src={rtimg3} alt="" />
                <div className="cate-txt">
                  <h4>Print Retractable Banners</h4>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-4">
        <Container>
          <div className="company-info">
            <div className="info-bx">
              <div className="info-img"></div>
              <h4>Design it yourself</h4>
            </div>
            <div className="info-bx">
              <div className="info-img"></div>
              <h4>Incredible Quality and Value</h4>
            </div>
            <div className="info-bx">
              <div className="info-img"></div>
              <h4>Exclusive Corporate Solutions</h4>
            </div>
            <div className="info-bx">
              <div className="info-img"></div>
              <h4>100% Satisfaction Guarantee</h4>
            </div>
            <div className="info-bx">
              <div className="info-img"></div>
              <h4>Get Free quotes for Bulk orders</h4>
            </div>
          </div>
        </Container>
      </section>

      <section className="main-wrap">
        <div className="container">
          <h2 className="main-title">Trending Products</h2>

          <Trendingproduct />
        </div>
      </section>

      <section className="solution-sec">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="solution-txt">
                <h3>Do you need exclusive Corporate solutions?</h3>
                <p>Dedicated Corporate page with customization options, corporate entry, & more</p>
                <Link to="#" className="btn btn-danger mt-3">Know More</Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="solution-img">
                <img className="img-fluid" src={pic1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

    </>
  )
}

export default Home