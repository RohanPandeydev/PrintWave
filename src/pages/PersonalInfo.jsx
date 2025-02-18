import React from 'react'
import Header from '../layout/Header'
import { Col, Container, Row } from 'reactstrap'
import PersonalInfoForm from '../components/profile/PersonalInfoForm'
import ProfileMenuSidebar from '../layout/ProfileMenuSidebar'

const PersonalInfo = () => {
    return (
        <>
            <Header />
            <section className='main-wrap'>
                <Container>
                    <h2 className='page-title'>My Profile</h2>

                    <Row className='mt-5'>
                        <Col lg={2} md={3}>
                            <ProfileMenuSidebar />
                        </Col>
                        <Col lg={10} md={9}>
                            <PersonalInfoForm />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default PersonalInfo