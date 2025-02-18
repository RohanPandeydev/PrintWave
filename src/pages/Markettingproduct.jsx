import React from 'react'
import Innerban from '../layout/Innerban'
import Header from '../layout/Header'
import { Col, Container, Row } from 'reactstrap'
import Categoryproductlist from '../components/CategorySubcategoryList'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'

const Markettingproduct = () => {
  return (
    <>
        <Header />

        <Innerban />

        <section className='main-wrap'>
            <Container>
                <Row>
                    <Categoryproductlist />

                    <div className='text-center mt-5'>
                        <Link to="#" className="btn btn-success">Load More</Link>
                    </div>
                </Row>
            </Container>
        </section>

        <Footer />
    </>
  )
}

export default Markettingproduct